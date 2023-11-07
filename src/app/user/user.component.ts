import { Component, EventEmitter, OnInit,Output,TemplateRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { person } from './person';
import { vote } from './vote';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit{
  @Output() memberSeleccionado = new EventEmitter<number>();

  list: string;
  id: string;
  name: string;
  members: any = [];
  selectMember: any = null; 
  userDNI:string|null;
  modalRef?: BsModalRef;
  message?: string;
  dni: string = '';
  nameUser: string = '';
  showAlert: boolean = false;
  selectedIndex: number;
  showModal: boolean = false;
  messageModalRef?: BsModalRef;
  voto: vote = {election_id: '',
                list_id:''}
  completeName=''
  

  

  constructor(private route:Router,
              private dataService: DataService,
              private authService: AuthService,
              private modalService: BsModalService,
              private activatedRoute: ActivatedRoute, 
              private authservice: AuthService ){}

              ngOnInit(): void {
                this.userDNI = this.authService.getAdmin_id();
                if (this.userDNI !== null) {  // ATENTO HAY ERROR DE AUTORIZACION
                  this.authService.getOneStudent(this.userDNI).subscribe((userData) => {
                    console.log('aaaaaaaaaaaa',userData)
                    
                      this.completeName = userData.results.name +' '+ userData.results.last_name
                    
                  });// HASTA ACA
                }
                this.activatedRoute.paramMap.subscribe((params) => {
                  this.id = params.get('id') || '';
                  console.log(this.id);
                  this.authservice.getListbyElection(this.id).subscribe((response) => {
                    this.members = response.results;
                    console.log(response);
                  });
                });
              }
              

  selectMembers(miembro: any) {
    if (this.selectMember) {
      this.selectMember.selected = false;
      console.log(this.selectMember.id)
    }
    miembro.selected = true; 
    this.selectMember = miembro;
    this.memberSeleccionado.emit(miembro.id);
  }

 openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  registerVote(): void{
      console.log(this.id)
      console.log(this.selectMember.id)
      this.voto.election_id = this.id
      this.voto.list_id = String(this.selectMember.id)
      console.log(this.voto)
    this.authService.loadVote(this.voto ).subscribe(response => {
      console.log(response)
    }) 
  }
  
  
  confirm(): void {
    this.registerVote();
    this.modalRef?.hide();
    this.showAlert=true;
    this.openMessageModal(); 
    this.route.navigate(['message']),
    setTimeout(() => {
      this.messageModalRef?.hide();
      this.route.navigate(['selection-election']);
    }, 2000);  }
  
 
  decline(): void {
  
    this.modalRef?.hide();
  }

cancel(){ this.route.navigate(['selection-election']);} 


openMessageModal() {
  const initialState = {
    message: this.message
  };
}
}



