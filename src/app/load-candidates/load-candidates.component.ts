import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '../auth.service';
import { Candidate } from '../models/candidate';

@Component({
  selector: 'app-load-candidates',
  templateUrl: './load-candidates.component.html',
  styleUrls: ['./load-candidates.component.scss'],
})
export class LoadCandidatesComponent {
  formData: any = {};
  modalRef?: BsModalRef;
  message?: string;
  loadCandidate: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private modalService: BsModalService,
    private authservice: AuthService
  ) {
    this.loadCandidate = this.formBuilder.group({
      dni: ['', Validators.required],
    });
  }

  ngOninit(): void {}

  submitForm() {
    if (this.loadCandidate.valid) {
      const candidate:Candidate={
      userId:this.loadCandidate.get('dni')?.value
      };
      this.authservice.loadCandidates(candidate).subscribe(
        (response: any) => {
          if (response) {
            this.route.navigate(['load-list']);
          } else {
            console.log('No se cargo candidato');
          }
        },
        (error) => {
          console.log('Error HTTP', error);
        }
      );
    }
  }
  reload() {
    location.reload();
  }
  exit() {
    this.route.navigate(['admin']);
  }
}
