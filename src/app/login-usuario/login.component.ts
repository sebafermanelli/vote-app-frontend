import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { setTheme } from 'ngx-bootstrap/utils';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login' ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userForm:FormGroup
  showAlert: boolean=false;

  constructor(private route: Router, private authService: AuthService, private fb:FormBuilder) {
    setTheme('bs5'); 
    this.userForm=this.fb.group({
      DNI:['',Validators.required]
    })
  }

  forUser(): void {
    if(this.userForm.valid && this.userForm.get('DNI')){
      const dni = this.userForm.get('DNI')?.value;
      this.authService.setId(dni);
      console.log(this.authService.getId)
       this.authService.emailCode(dni).subscribe(
        (response:string)=>{
          if(response){
            this.route.navigate(['validation'])
          }else{
          }
        },
        (error)=>{
          this.showAlert=true;
        }
       )

    }
   
  }
  enterAdmin(){
    this.route.navigate(['login-admin'])
  }
}