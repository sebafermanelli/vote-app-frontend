import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  cuadroDNI = '';

  constructor(private route: Router, private authService: AuthService) {}

  alUser(): void {
    let DNI = this.cuadroDNI;
    if (this.authService.login(DNI)) {
      this.route.navigate(['user']);
    } else {
      alert('Mal ingresado');
    }
  }
  enterAdmin(){
    this.route.navigate(['login-admin'])
  }
}