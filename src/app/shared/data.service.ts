import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getNombre(): string {
    throw new Error('Method not implemented.');
  }
  private dni: string = '';
  getUsuario: any;
  setDNI(dni: string): void {
    this.dni = dni;
  }

  getDNI(): string {
    return this.dni;
  }


  constructor() { }
}
