import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  rolForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router,private authservice: AuthService) {
    this.rolForm = this.fb.group({
      description: ['',Validators.required] 
    });
  }

  loadRole(){
    if (this.rolForm.valid) {
      const description = this.rolForm.get('description')?.value;
      this.authservice.loadRoles(description).subscribe(
        (response: any) => {
          if (response) {
            console.log('Election saved successfully:', response);
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

  cargarCandidatos() {
    this.loadRole();
    this.router.navigate(['admin']);
    
  }
  cargarNuevoRol(){
    this.loadRole();
    location.reload();
  }
  exit(){
    this.router.navigate(['admin'])
  }

}
