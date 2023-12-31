import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { BrowserStorageService } from '../storage.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss'],
})
export class LoginAdminComponent {
  adminForm: FormGroup;
  showAlert: boolean = false;

  constructor(
    private route: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private ls: BrowserStorageService
  ) {
    this.adminForm = this.fb.group({
      userName: ['', [Validators.required]],
      userPassword: ['', [Validators.required]],
    });
  }
  alAdmin() {
    if (this.adminForm.valid) {
      const username = this.adminForm.get('userName')?.value;
      const password = this.adminForm.get('userPassword')?.value;

      this.authService.loginAdmin(username, password).subscribe(
        (response: any) => {
          if (response.accessToken) {
            this.ls.setAdmin(response.accessToken, response.admin.id);
            this.route.navigate(['admin']);
          }
        },
        (error:any) => {
          this.showAlert = true;
        }
      );
    }
  }

  exit() {
    this.route.navigate(['']);
  }
}
