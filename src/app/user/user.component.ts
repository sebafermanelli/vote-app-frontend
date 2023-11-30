import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { vote } from './vote';
import { BrowserStorageService } from '../storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Output() memberSeleccionado = new EventEmitter<number>();

  list: string;
  id: string;
  name: string;
  members: any = [];
  selectMember: any = null;
  userDNI: string | null;
  modalRef?: BsModalRef;
  message?: string;
  dni: string = '';
  nameUser: string = '';
  showAlert: boolean = false;
  selectedIndex: number;
  showModal: boolean = false;
  messageModalRef?: BsModalRef;
  voto: vote = { electionId: '', listId: '' };
  completeName = '';
  nombresPersonasListas: {
    createdAt: string;
    description: string;
    electioId: number;
    id: number;
    nombre1: string;
    nombre2: string;
    nombre3: string;
    rol1Id: string;
    rol2Id: string;
    rol3Id: string;
    updatedAt: string;
    votes: number;
  }[] = [];

  constructor(
    private route: Router,
    private authService: AuthService,
    private modalService: BsModalService,
    private activatedRoute: ActivatedRoute,
    private authservice: AuthService,
    private ls: BrowserStorageService
  ) {}

  ngOnInit(): void {
    this.getName();
    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      this.id = params.get('id') || '';
      this.authservice.getListbyElection(this.id).subscribe((response) => {
        this.members = response.results;
        this.members.map((list: any) => {
          list = { ...list, nombre1: '', nombre2: '', nombre3: '' };
          this.authService.getOneStudent(list.rol1Id).subscribe((userData) => {
            list.nombre1 =
              userData.results.name + ' ' + userData.results.lastName;
          });
          this.authService.getOneStudent(list.rol2Id).subscribe((userData) => {
            list.nombre2 =
              userData.results.name + ' ' + userData.results.lastName;
          });
          this.authService.getOneStudent(list.rol3Id).subscribe((userData) => {
            list.nombre3 =
              userData.results.name + ' ' + userData.results.lastName;
          });
          this.nombresPersonasListas.push(list);
        });
      });
    });
  }
  getName() {
    this.userDNI = this.ls.getAdminId();
    if (this.userDNI !== null) {
      this.authService.getOneStudent(this.userDNI).subscribe((userData) => {
        this.completeName =
          userData.results.name + ' ' + userData.results.lastName;
      });
    }
  }


  selectMembers(miembro: any) {
    if (this.selectMember) {
      this.selectMember.selected = false;
    }
    miembro.selected = true;
    this.selectMember = miembro;
    this.memberSeleccionado.emit(miembro.id);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  registerVote(): void {
    this.voto.electionId = this.id;
    this.voto.listId = String(this.selectMember.id);
    this.authService.loadVote(this.voto).subscribe((response) => {
    });
  }

  confirm(): void {
    this.registerVote();
    this.modalRef?.hide();
    this.showAlert = true;
    this.openMessageModal();
    this.route.navigate(['message']),
      setTimeout(() => {
        this.messageModalRef?.hide();
        this.route.navigate(['selection-election']);
      }, 2000);
  }

  decline(): void {
    this.modalRef?.hide();
  }

  cancel() {
    this.route.navigate(['selection-election']);
  }

  openMessageModal() {
    const initialState = {
      message: this.message,
    };
  }
}
