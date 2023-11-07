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
  student:any=[];

  constructor(
    private modalService: BsModalService,
    private router: Router,
    private formBuilder: FormBuilder,
    private authservice: AuthService
  ) {
    this.loadElections = this.formBuilder.group({
      admin_id: [''],
      description: ['', Validators.required],
    });
  }

 

  exit() {
    this.router.navigate(['admin']);
  }

  loadlist() {
    this.areCamposCompletos();
    if (this.loadElections.valid) {
      const admin_id = this.authservice.getAdmin_id();
      const description = this.loadElections.get('description')?.value;
      this.authservice.loadElection(admin_id, description).subscribe(
        (response: any) => {
          if (response) {
            this.authservice.setElection_id(response.results.id);
            console.log('Election saved successfully:', response);
            this.authservice.loadElectionUser(response.results.id).subscribe((response: any) => {
              console.log(response);
            },
            (error) => {
              console.log(error);
            });
            this.authservice.loadDelegation(response.results.id).subscribe(
              (response: any) => {
                console.log(response);
              },
              (error) => {
                console.log(error);
              }
            );
            
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
