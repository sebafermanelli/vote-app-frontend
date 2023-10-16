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
  lists=[
    {     value:'1', label: '1'    },
    {     value:'2', label: '2'    },
    {     value:'3', label: '3'    },
    {     value:'4', label: '4'    },
    {     value:'5', label: '5'    },
    {     value:'6', label: '6'    },
    {     value:'7', label: '7'    },
    {     value:'8', label: '8'    },
    {     value:'9', label: '9'    },
    {     value:'10', label: '10'  }
  ]

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
    this.router.navigate(['load-candidates'])
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