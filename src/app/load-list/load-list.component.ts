import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-load-list',
  templateUrl: './load-list.component.html',
  styleUrls: ['./load-list.component.scss']
})
export class LoadListComponent {
  loadList:FormGroup
  isCollapsed = true;
  modalRef?: BsModalRef;
  message?: string;
  showModal = false; 

  constructor(private modalService: BsModalService,private route: Router, private fb:FormBuilder ) {
    this.loadList=this.fb.group({
      presidentName:['',Validators.required],
      vpName:['',Validators.required],
      sec1Name:['',Validators.required],
      sec2Name:['',Validators.required],
      sec3Name:['',Validators.required],
      url:[''],
      listName:['',Validators.required],
      textarea:['',Validators.required]

    })


  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  load(): void {
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