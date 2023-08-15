import { Component,Input,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../shared/data.service';
import { AuthService } from '../app.component';
import { ListasComponent } from '../listas/listas.component';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit{
  dni: string = '';
  nombre: string = '';

  constructor(private route:Router,
              private dataService: DataService,
              private authService: AuthService){}


  ngOnInit(): void {
    // Obtener DNI y contraseña desde el servicio
    if (this.authService.estaAutenticado()) {
      const usuario = this.authService.getUsuario();
      this.dni = usuario.DNI;
      this.nombre = usuario.nombre;
  }else{
    this.route.navigate(['login']);
  }

}

}



