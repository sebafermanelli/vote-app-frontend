import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-load-student',
  templateUrl: './load-student.component.html',
  styleUrls: ['./load-student.component.scss']
})
export class LoadStudentComponent {
loadStudent:FormGroup;
modalRef?: BsModalRef;
message?: string;
showModal = false;


constructor(private fb:FormBuilder,private modalService: BsModalService,private router: Router){

  this.loadStudent=this.fb.group({
    studentName:['',Validators.required],
    studentLastname:['',Validators.required],
    studentID:['',Validators.required],
    studentAdress:['',Validators.required],
    studentEmail:['',Validators.required,Validators.email],
    studentPhone:['',Validators.required],
    studentCourse:['',Validators.required],
    studentPhoto:['',Validators.required]
  })
}



openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
}

confirm(): void {
  this.showModal = true;
  this.modalRef?.hide();
  this.studentOk()
}

decline(): void {
  this.showModal = false;
  this.modalRef?.hide();
}
studentOk(){
  this.router.navigate(['admin'])
}
}
