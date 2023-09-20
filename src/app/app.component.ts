import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'App';
  user: any;

  constructor(private authService: AuthService) {
    this.user = authService.getUsuario(),
    setTheme('bs5'); 
  }

  authenticated() {
    return this.authService.getAuthtenticated();
  }
}