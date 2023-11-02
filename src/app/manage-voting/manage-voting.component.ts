import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';

export class vote{
  id:string;
  description:string;
  startActive:boolean;
  finishActive:boolean;
  resultActive:boolean;
}


@Component({
  selector: 'app-manage-voting',
  templateUrl: './manage-voting.component.html',
  styleUrls: ['./manage-voting.component.scss']
})
export class ManageVotingComponent {

  voting: vote[]=[]
  constructor(private route: Router,private authservice:AuthService) {}

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
  start(vote:any){
    vote.startActive=false;
    vote.finishActive=true;
  }
  finish(vote:any){
    vote.startActive=false;
    vote.finishActive=false;
    vote.resultActive=true;
  }
  count(vote:any){
    this.route.navigate(['voting-interface'])
  }


  deleteVote(i: number) {
    if (i >= 0 && i < this.voting.length) {
      this.voting.splice(i, 1); 
    }
  }
  exit(){
    this.route.navigate(['admin'])
  }
  seeList(id: number) {
    this.route.navigate(['listas-admin', id+1]);
  }
}
