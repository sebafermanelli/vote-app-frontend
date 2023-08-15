import { Component } from '@angular/core';
import { LoginComponent } from './login_usuario/login.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private usuario={
    nombre: 'Santiago',
    edad: 21,
    DNI: '43717503',
}
  private isAuthenticated = false;
  login(DNI: string): boolean {
    this.isAuthenticated = this.usuario.DNI === DNI;
    return this.isAuthenticated;
}
  getUsuario() {
  return this.usuario;
}
  estaAutenticado() {
  return this.isAuthenticated;
}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'App';
  usuario: any;

  login(DNI: string): boolean {
    if (this.usuario.DNI === DNI ) {
      return true;
    }
    return false;
  }

  getUsuario() {
    return this.usuario;
  }
}

  


