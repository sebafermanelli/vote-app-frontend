import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {

  adminForm:FormGroup;
  showAlert:boolean=false;

  constructor(private route: Router, private authService: AuthService, private fb:FormBuilder) {
    this.adminForm=this.fb.group({
userName:['',[Validators.required]],
userPassword: ['',[Validators.required]],
    })
  }

  alAdmin(): void {
    if(this.adminForm.valid && this.adminForm.get('userName')){
      const user =this.adminForm.get('userName')?.value;
      const password=this.adminForm.get('userPassword')?.value;
      if (this.authService.loginAdmin(user, password)) {
      this.route.navigate(['admin']);
    } else {
      this.showAlert=true;
    }
    }  
    
  
    
  }

   exit(){
    this.route.navigate(['']);
  }
}