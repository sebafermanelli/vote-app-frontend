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
  cuadroDNI = '';
  showAlert: boolean=false;

  constructor(private route: Router, private authService: AuthService) {
    setTheme('bs5'); 
  }

  alUser(): void {
    let DNI = this.cuadroDNI;
    if (this.authService.login(DNI)) {
      this.route.navigate(['user']);
    } else {
      this.showAlert = true;
    }
  }
  enterAdmin(){
    this.route.navigate(['login-admin'])
  }
}