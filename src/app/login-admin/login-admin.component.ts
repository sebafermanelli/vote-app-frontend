import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {
  frameUser = '';
  framePassword = '';
  showAlert:boolean=false;

  constructor(private route: Router, private authService: AuthService) {}

  alAdmin(): void {
    let user = this.frameUser.trim();  
    let password = this.framePassword.trim();  
    
  
    if (this.authService.loginAdmin(user, password)) {
      this.route.navigate(['admin']);
    } else {
      this.showAlert=true;
    }
  }

  exit(){
    this.route.navigate(['']);
  }
}