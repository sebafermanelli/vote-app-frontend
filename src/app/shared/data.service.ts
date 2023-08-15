import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getNombre(): string {
    throw new Error('Method not implemented.');
  }
  private dni: string = '';
  private password: string = '';
  getUsuario: any;
  setDNI(dni: string): void {
    this.dni = dni;
  }
  setPassword(password: string): void {
    this.password = password;
  }
  getDNI(): string {
    return this.dni;
  }

  getPassword(): string {
    return this.password;
  }

  constructor() { }
}
