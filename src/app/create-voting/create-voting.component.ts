import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Election } from '../models/election';
import { BrowserStorageService } from '../storage.service';

@Component({
  selector: 'app-create-voting',
  templateUrl: './create-voting.component.html',
  styleUrls: ['./create-voting.component.scss'],
})
export class CreateVotingComponent {
  modalRef?: BsModalRef;
  message?: string;
  showModal = false;
  createForm: FormGroup;
  loadElections: FormGroup;
  constructor(
    private modalService: BsModalService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private ls: BrowserStorageService
  ) {
    this.loadElections = this.formBuilder.group({
      adminId: [''],
      description: ['', Validators.required],
    });
  }

  exit() {
    this.router.navigate(['admin']);
  }

  loadlist() {
    this.areCamposCompletos();
    if (this.loadElections.valid) {
      const election: Election = {
        adminId: this.ls.getAdminId(),
        description: this.loadElections.get('description')?.value,
      };
      this.authservice.loadElection(election).subscribe(
        (response: any) => {
          if (response) {
            this.ls.setElectionId(response.results.id);
            this.authservice.loadElectionUser(response.results.id).subscribe();
            this.authservice.loadDelegation(response.results.id).subscribe();
            this.router.navigate(['load-candidates']);
          } else {
            console.error('Failed to save the election.');
          }
        },
        (error) => {
          console.error('Error in HTTP request:', error);
        }
      );
    }
  }

  areCamposCompletos(): boolean {
    const descriptionControl = this.loadElections.get('description');
    return descriptionControl ? descriptionControl.valid : false;
  }
}
