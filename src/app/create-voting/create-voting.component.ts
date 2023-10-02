import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-voting',
  templateUrl: './create-voting.component.html',
  styleUrls: ['./create-voting.component.scss']
})
export class CreateVotingComponent {
  modalRef?: BsModalRef;
  message?: string;
  showModal = false;
  createForm: FormGroup; 

  constructor(private modalService: BsModalService,private router: Router,private formBuilder: FormBuilder) 
  {
    this.createForm = this.formBuilder.group({
      nombreEleccion: ['', Validators.required],
      cantidadListas: [null, Validators.required]
    });
  }

  exit() {
    this.router.navigate(['admin'])
  }

  loadlist() {
    this.router.navigate(['load-list'])
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.showModal = true;
    this.modalRef?.hide();
    this.loadlist()
  }

  decline(): void {
    this.showModal = false;
    this.modalRef?.hide();
  }
  areCamposCompletos(): boolean {
    return this.createForm.valid;
  }
}