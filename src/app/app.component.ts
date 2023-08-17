import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  usuario: any;

  constructor(private authService: AuthService) {
    this.usuario = authService.getUsuario();
  }

  estaAutenticado() {
    return this.authService.estaAutenticado();
  }
}