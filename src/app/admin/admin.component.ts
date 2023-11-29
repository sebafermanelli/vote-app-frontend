import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Admin } from '../models/admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  Admin:any;
  id:Admin['id']

  constructor(private router: Router, private authService: AuthService) {
    this.Admin= this.authService.getAdmin(); // que hace este??
    this.id = this.authService.getAdmin_id();
  }

  ngOnInit() {}

  salir() {
    this.authService.removeToken();
    this.router.navigate(['login-admin']);
  }

  loadlist() {
    this.router.navigate(['load-list']);
  }
  manageList() {
    this.router.navigate(['manage-voting']);
  }
  loadStudent() {
    this.router.navigate(['load-student']);
  }
  createVoting() {
    this.router.navigate(['create-voting']);
  }
  listStudent() {
    this.router.navigate(['list-students']);
  }
}
