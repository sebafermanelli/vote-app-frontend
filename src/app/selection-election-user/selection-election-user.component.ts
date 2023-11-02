import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

export class vote{
  id:string;
  description:string;
  startActive:boolean;
  finishActive:boolean;
  resultActive:boolean;
}
@Component({
  selector: 'app-selection-election-user',
  templateUrl: './selection-election-user.component.html',
  styleUrls: ['./selection-election-user.component.scss']
})
export class SelectionElectionUserComponent {
  voting: vote[]=[]
  constructor(private route: Router,private authservice:AuthService ) {}

  ngOnInit(){
    this.loadElections();
    
     }
      loadElections(){
        this.authservice.getElections().subscribe(
          response => {
            this.voting=response.results
          }
    
        )
    
      }

  seeList(id: number) {
    this.route.navigate(['user', id+1]);
  }
  exit(){
    this.authservice.removeToken()
    this.route.navigate([''])
  }
}

