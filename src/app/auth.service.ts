import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuario = {
    nombre: 'Santiago',
    edad: 21,
    DNI: '12345678',
    mail:'santicinel@gmail.com',
    validation:123456, 
  };


  private admin = {
    user: 'pepe',
    password: '1234'
  };

  private isAuthenticated = false;

  login(DNI: string): boolean {
    this.isAuthenticated = this.usuario.DNI === DNI;
    return this.isAuthenticated;
  }

  loginAdmin(user: string, password: string): boolean {
    console.log('User:', user);
    console.log('Password:', password);
    this.isAuthenticated=false;
    if (this.admin.user === user && this.admin.password === password) {
      this.isAuthenticated = true;
    }
    return this.isAuthenticated;
  }

  getUsuario() { 
    return this.usuario;
  }

  estaAutenticado() {
    return this.isAuthenticated;
  }
  getCorreoUsuario(): string {
    return this.usuario.mail;
  }
  getAdmin() {
    return this.admin;
  }
}