import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadListComponent } from '../load-list/load-list.component';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {

  constructor(private route: Router) {}

  salir() {
    this.route.navigate(['login-admin']);
  }
  loadlist(){
    this.route.navigate(['load-list']);
  }
}