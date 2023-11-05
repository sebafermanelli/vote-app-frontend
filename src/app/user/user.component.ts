import { Component, OnInit,TemplateRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit{
  modalRef?: BsModalRef;
  message?: string;
  dni: string = '';
  name: string = '';
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



