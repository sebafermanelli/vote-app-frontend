import { Component ,TemplateRef} from '@angular/core';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-load-candidates',
  templateUrl: './load-candidates.component.html',
  styleUrls: ['./load-candidates.component.scss']
})
export class LoadCandidatesComponent {
  formData: any = {};
  modalRef?: BsModalRef;
  message?: string;

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private route:Router,private modalService: BsModalService) {
    this.myForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      cargo: ['', Validators.required]
    });
  }
  submitForm() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.modalRef?.hide();
    location.reload();
  }
 
  decline(): void {
    this.modalRef?.hide();
    this.route.navigate(['load-list']);
  }
  exit(){
    this.route.navigate(['admin']);
  }
}
