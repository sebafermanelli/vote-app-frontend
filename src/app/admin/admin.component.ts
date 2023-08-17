import { Component } from '@angular/core';
import { LoginAdminComponent } from '../login-admin/login-admin.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
 
  constructor(private route:Router){}



  salir(){this.route.navigate(['login-admin'])}
}
