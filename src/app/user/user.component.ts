import { Component, OnInit,TemplateRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from '../message-modal/message-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit{
  modalRef?: BsModalRef;
  message?: string;
  dni: string = '';
  nombre: string = '';
  showAlert: boolean = false;
  selectedIndex: number;
  showModal: boolean = false;
  messageModalRef?: BsModalRef;

  

  constructor(private route:Router,
              private dataService: DataService,
              private authService: AuthService,
              private modalService: BsModalService,
              ){}

  ngOnInit(): void {
    if (this.authService.estaAutenticado()) {
      const usuario = this.authService.getUsuario();
      this.dni = usuario.DNI;
      this.nombre = usuario.nombre;
  }else{
    this.route.navigate(['']);}
  }


 openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  
  confirm(): void {
    
    this.modalRef?.hide();
    this.showAlert=true;
    this.openMessageModal(); 
    this.route.navigate(['message']),
    setTimeout(() => {
      this.messageModalRef?.hide();
      this.route.navigate(['']);
    }, 2000);  }
  
 
  decline(): void {
  
    this.modalRef?.hide();
  }

cancelar(){ this.route.navigate(['']);} 


openMessageModal() {
  const initialState = {
    message: this.message
  };
}
}



