import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  admin: any; 

  constructor(private router: Router, private authService: AuthService) {
    this.admin = this.authService.getAdmin();
  }

  ngOnInit() {}

  salir() {
    this.router.navigate(['login-admin']);
  }

  loadlist() {
    this.router.navigate(['load-list']);
  }
  manageList(){
    this.router.navigate(['manage-voting'])
  }
  loadStudent(){
    this.router.navigate(['load-student'])
  }
  
}