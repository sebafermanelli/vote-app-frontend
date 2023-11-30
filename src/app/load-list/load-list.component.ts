import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '../auth.service';
import { List } from '../models/list';
import { BrowserStorageService } from '../storage.service';
import { ValidatorHelper } from './areCamposCompletos';

@Component({
  selector: 'app-load-list',
  templateUrl: './load-list.component.html',
  styleUrls: ['./load-list.component.scss'],
})
export class LoadListComponent {
  loadList: FormGroup;
  isCollapsed = true;
  modalRef?: BsModalRef;
  message?: string;
  showModal = false;
  showRoles = false;
  list: List[] = [];

  constructor(
    private modalService: BsModalService,
    private route: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private ls: BrowserStorageService
  ) {
    this.loadList = this.formBuilder.group({
      electionId: [''],
      description: ['', Validators.required],
      rol1Id: ['', Validators.required],
      rol2Id: ['', Validators.required],
      rol3Id: ['', Validators.required],
    });
  }

  loadLista() {
    this.areCamposCompletos();
    if (this.loadList.valid) {
      const list: List = {
        electionId: this.ls.getElectionId(),
        description: this.loadList.get('description')?.value,
        rol1Id: this.loadList.get('rol1Id')?.value,
        rol2Id: this.loadList.get('rol2Id')?.value,
        rol3Id: this.loadList.get('rol3Id')?.value,
      };
      this.authService.loadList(list).subscribe(
        (response: any) => {
          if (response) {
            this.list = response.results;
            this.showRoles = true;
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
    return ValidatorHelper.areCamposCompletos(this.loadList);
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
