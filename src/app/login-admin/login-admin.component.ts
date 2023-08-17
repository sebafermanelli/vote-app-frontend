import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {
  cuadroUser = '';
  cuadroPassword = '';

  constructor(private route: Router, private authService: AuthService) {}

  alAdmin(): void {
    let user = this.cuadroUser;
    let password = this.cuadroPassword;
  
    console.log('Usuario:', user);
    console.log('Contraseña:', password);
  
    if (this.authService.loginAdmin(user, password)) {
      this.route.navigate(['admin']);
    } else {
      alert('Mal ingresado');
    }
  }
  exit(){
    this.route.navigate(['']);
  }
}