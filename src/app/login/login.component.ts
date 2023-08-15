import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit{

  constructor(private route:Router,private dataService: DataService){}

  ngOnInit(): void {}

  alUser():void{
    let DNI=this.cuadroDNI;
    let password=this.cuadroPassword;
    this.dataService.setDNI(DNI);
    this.dataService.setPassword(password);

    this.route.navigate(['user']); // Esto navegará a la ruta 'user'
  }
  
  cuadroDNI:string="";
  cuadroPassword:string="";



}
