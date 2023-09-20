import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-login' ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  frameDNI = '';
  showAlert: boolean=false;

  constructor(private route: Router, private authService: AuthService) {
    setTheme('bs5'); 
  }

  forUser(): void {
    let DNI = this.frameDNI;
    if (this.authService.login(DNI)) {
      this.route.navigate(['validation']);
    } else {
      this.showAlert = true;
    }
  }
  enterAdmin(){
    this.route.navigate(['login-admin'])
  }
}