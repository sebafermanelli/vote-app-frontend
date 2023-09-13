import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  usuario: any;

  constructor(private authService: AuthService) {
    this.usuario = authService.getUsuario(),
    setTheme('bs5'); 
  }

  estaAutenticado() {
    return this.authService.estaAutenticado();
  }
}