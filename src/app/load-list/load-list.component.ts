import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-load-list',
  templateUrl: './load-list.component.html',
  styleUrls: ['./load-list.component.scss']
})
export class LoadListComponent {
  isCollapsed = true;
  modalRef?: BsModalRef;
  message?: string;
  showModal = false; 

  constructor(private modalService: BsModalService,private route: Router) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.showModal=true;
    this.message = 'Confirmado!';
    this.modalRef?.hide();
  }
 
  decline(): void {
    this.showModal=false;
    this.modalRef?.hide();
  }
  exit(){
    this.route.navigate(['admin'])
  }
}