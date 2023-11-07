import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { vote } from './vote';

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
  voto: vote = { election_id: '', list_id: '' };
  completeName = '';
  nombresPersonasListas: {
    createdAt:string;
    description:string;
    election_id:number;
    id:number;
    nombre1: string;
    nombre2: string;
    nombre3: string;
    rol1_id:string;
    rol2_id:string;
    rol3_id:string;
    updatedAt:string;
    votes:number;
  }[] = [];

  constructor(
    private route: Router,
    private dataService: DataService,
    private authService: AuthService,
    private modalService: BsModalService,
    private activatedRoute: ActivatedRoute,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {
    this.getName();
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
      this.authservice.getListbyElection(this.id).subscribe((response) => {
        this.members = response.results;
         this.members.map((list: any) => {
          list = { ...list, nombre1: '', nombre2: '', nombre3: '' };
          this.authService.getOneStudent(list.rol1_id).subscribe((userData) => {
            list.nombre1 =
              userData.results.name + ' ' + userData.results.last_name;
          });
          this.authService.getOneStudent(list.rol2_id).subscribe((userData) => {
            list.nombre2 =
              userData.results.name + ' ' + userData.results.last_name;
          });
          this.authService.getOneStudent(list.rol3_id).subscribe((userData) => {
            list.nombre3 =
              userData.results.name + ' ' + userData.results.last_name;
          });
          this.nombresPersonasListas.push(list);
         
        });
      });
    });
  }
  getName() {
    this.userDNI = this.authService.getAdmin_id();
    if (this.userDNI !== null) {
      this.authService.getOneStudent(this.userDNI).subscribe((userData) => {
        this.completeName =
          userData.results.name + ' ' + userData.results.last_name;
      });
    }
  }
  getNameRoles(rol1: string, rol2: string, rol3: string) {
    console.log(rol1, rol2, rol3);
  }

  selectMembers(miembro: any) {
    if (this.selectMember) {
      this.selectMember.selected = false;
      console.log(this.selectMember.id);
    }
    miembro.selected = true;
    this.selectMember = miembro;
    this.memberSeleccionado.emit(miembro.id);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  registerVote(): void {
    console.log(this.id);
    console.log(this.selectMember.id);
    this.voto.election_id = this.id;
    this.voto.list_id = String(this.selectMember.id);
    console.log(this.voto);
    this.authService.loadVote(this.voto).subscribe((response) => {
      console.log(response);
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
