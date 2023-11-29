import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { setTheme } from 'ngx-bootstrap/utils';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BrowserStorageService } from '../storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  userForm: FormGroup;
  showAlert: boolean = false;

  constructor(
    private route: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private ls: BrowserStorageService
  ) {
    setTheme('bs5');
    this.userForm = this.fb.group({
      DNI: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
    });
  }

  forUser(): void {
    if (this.userForm.valid && this.userForm.get('DNI')) {
      const dni = this.userForm.get('DNI')?.value;
      this.ls.setUser('', dni);
      this.authService.emailCode(dni).subscribe(
        (response: string) => {
          if (response) {
            this.route.navigate(['validation']);
          } else {
            this.showAlert = true;
          }
        },
        (error) => {
          this.showAlert = true;
        }
      );
    }
  }
  enterAdmin() {
    this.route.navigate(['login-admin']);
  }
}
