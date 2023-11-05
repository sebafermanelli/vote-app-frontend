import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  isCollapsed = true;
  modalRef?: BsModalRef;
  message?: string;
  showModal = false;
  showRoles = false;
  roles: any = [];

  constructor(
    private modalService: BsModalService,
    private route: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loadList = this.formBuilder.group({
      election_id: [''],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getRole();
  }
  getRole() {
    this.authService.getroles().subscribe(
      (data) => {
        this.roles = data.results;
        console.log(this.roles);
        console.log('Success:', data);
      },
      (error) => {
        console.error('Error al mostrar:', error);
      }
    );
  }
  loadLista() {
    this.areCamposCompletos();
    if (this.loadList.valid) {
      const election_id = this.authService.getElection_id();
      const description = this.loadList.get('description')?.value;
      this.authService.loadList(election_id, description).subscribe(
        (response: any) => {
          if (response) {
            console.log('List saved Successfully: ', response);
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
    return descriptionControl ? descriptionControl.valid : false;
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
