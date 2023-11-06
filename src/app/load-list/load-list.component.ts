import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-load-list',
  templateUrl: './load-list.component.html',
  styleUrls: ['./load-list.component.scss'],
})
export class LoadListComponent implements OnInit {
  loadList: FormGroup;
  loadRol: FormGroup;
  isCollapsed = true;
  modalRef?: BsModalRef;
  message?: string;
  showModal = false;
  showRoles = false;
  list: any = [];
  


  constructor(
    private modalService: BsModalService,
    private route: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loadList = this.formBuilder.group({
      election_id: [''],
      description: ['', Validators.required],
      rol1_id: ['',Validators.required],
      rol2_id: ['',Validators.required],
      rol3_id: ['',Validators.required],
    });
  }

  ngOnInit() {
    
  }
  


  loadLista() {
    this.areCamposCompletos();
    if (this.loadList.valid) {
      const election_id = this.authService.getElection_id();
      const description = this.loadList.get('description')?.value;
      const rol1_id=this.loadList.get('rol1_id')?.value;
      const rol2_id=this.loadList.get('rol2_id')?.value;
      const rol3_id=this.loadList.get('rol3_id')?.value;
      this.authService.loadList(election_id, description,rol1_id,rol2_id,rol3_id).subscribe(
        (response: any) => {
          if (response) {
            console.log('List saved Successfully: ', response);
            this.list = response.results;
            console.log(this.list);
            this.showRoles = true;
          } else {
            console.error('error to save list');
          }
        },
        (error) => {
          console.error('Error in HTTP request: ', error);
        }
      );
    }
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  areCamposCompletos(): boolean {
    const descriptionControl = this.loadList.get('description');
    const rol1_id = this.loadList.get('rol1_id');
    const rol2_id = this.loadList.get('rol2_id');
    const rol3_id = this.loadList.get('rol3_id');
    return (
      (descriptionControl?.valid ?? false) &&
      (rol1_id?.valid ?? false) &&
      (rol2_id?.valid ?? false) &&
      (rol3_id?.valid ?? false)
    );
  }

  load(): void {
    this.showModal = true;
    this.message = 'Confirmado!';
    this.modalRef?.hide();
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }

  decline(): void {
    this.showModal = false;
    this.modalRef?.hide();
    this.route.navigate(['admin']);
  }

  exit() {
    this.route.navigate(['admin']);
  }
  refreshPage(): void {
    window.location.reload();
  }
}
