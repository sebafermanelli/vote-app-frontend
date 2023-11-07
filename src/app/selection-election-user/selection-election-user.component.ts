import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-selection-election-user',
  templateUrl: './selection-election-user.component.html',
  styleUrls: ['./selection-election-user.component.scss']
})
export class SelectionElectionUserComponent {
  voting: any=[]
  constructor(private route: Router,private authservice:AuthService ) {}

  ngOnInit(){
    this.loadElections();
     
     }
     loadElections() {
      this.authservice.getElections().subscribe(
        response => {
          this.voting = response.results.filter((vt:any) => !this.voting.finalizated);
        }
      );
    }

  seeList(id: string) {
    this.route.navigate(['user', id]);
  }
  exit(){
    this.authservice.removeToken()
    this.route.navigate([''])
  }
}

