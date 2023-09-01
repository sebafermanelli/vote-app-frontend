import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit{
  dni: string = '';
  nombre: string = '';
  showAlert: boolean = false;
  selectedIndex: number;

  constructor(private route:Router,
              private dataService: DataService,
              private authService: AuthService,
              ){}

  ngOnInit(): void {
    if (this.authService.estaAutenticado()) {
      const usuario = this.authService.getUsuario();
      this.dni = usuario.DNI;
      this.nombre = usuario.nombre;
  }else{
    this.route.navigate(['']);}
  }

  aceptar(){
    if(confirm(' ¿Estas Seguro de votar lo seleccionado? ') == true){
    this.showAlert=true;
    setTimeout(() => {
      this.showAlert = false;
      this.route.navigate(['']);
    }, 2000);  }
} 
cancelar(){ this.route.navigate(['']);}
}



