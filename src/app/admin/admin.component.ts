import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BrowserStorageService } from '../storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  Admin: any;
  id:string;
  constructor(
    private router: Router,
    private authService: AuthService,
    private ls: BrowserStorageService
  ) {
    this.Admin = this.authService.getAdmin();
    this.id=this.Admin.id
  }

  ngOnInit() {}

  salir() {
    this.ls.clear();
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
