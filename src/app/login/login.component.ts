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
  cuadroPassword:string="";

  constructor(private route:Router,
              private dataService: DataService,
              private authService: AuthService){}

  ngOnInit(): void {};
  

  alUser():void{
    let DNI=this.cuadroDNI;
    let password=this.cuadroPassword;
   
    if (this.authService.login(DNI, password)) {
      this.route.navigate(['user']);
        this.route.navigate(['user']); // Esto navegará a la ruta 'user'
      
    }else{
      alert('Mal ingresado');
    }


  }

}
