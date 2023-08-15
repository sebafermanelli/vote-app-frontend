import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { AuthService } from '../app.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit{
  cuadroDNI:string="";

  constructor(private route:Router,
              private dataService: DataService,
              private authService: AuthService){}

  ngOnInit(): void {};
  

  alUser():void{
    let DNI=this.cuadroDNI;
   
   
    if (this.authService.login(DNI)) {
      this.route.navigate(['user']);
  
      
    }else{
      alert('Mal ingresado');
    }


  }

}
