import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getName(): string {
    throw new Error('Method not implemented.');
  }
  private dni: string = '';
  getUser: any;
  setDNI(dni: string): void {
    this.dni = dni;
  }

  getDNI(): string {
    return this.dni;
  }


  constructor() { }
}
