import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';
import { AuthService } from '../auth.service';

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
  loadElections:FormGroup;


  constructor(private modalService: BsModalService,private router: Router,private formBuilder: FormBuilder,private authservice:AuthService) 
  {
    this.loadElections = this.formBuilder.group({
      admin_id: ['',Validators.required],
      description: ['', Validators.required]
    });
  }

  exit() {
    this.router.navigate(['admin'])
  }

  loadlist() {
    if (this.loadElections.valid) {
      const admin_id = this.authservice.getAdmin_id();
      const description = this.loadElections.get('description')?.value;
      this.authservice.loadElection(admin_id, description).subscribe(
        (response: any) => {
          if (response) {
            console.log('Election saved successfully:', response);
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
    const descriptionControl = this.createForm.get('description');
    return descriptionControl ? descriptionControl.valid : false;
  }
  
  
}