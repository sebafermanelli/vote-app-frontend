import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';

export class vote{
  id:number;
  desc:string;
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

  voting: vote[]=[
    {
      id:1,
      desc:'Presidente centro estudiante',
      startActive:true,
      finishActive:false,
      resultActive:false,
    },
    {
      id:2,
      desc:'Representante interescolar',
      startActive:true,
      finishActive:false,
      resultActive:false,
    },
    {
      id:3,
      desc:'Delegados',
      startActive:true,
      finishActive:false,
      resultActive:false,
    }
  ]
  constructor(private route: Router,) {}

  

  start(vote:any){
    vote.startActive=false;
    vote.finishActive=true;
  }
  finish(vote:any){
    vote.startActive=false;
    vote.finishActive=false;
    vote.resultActive=true;
  }
  count(vote:any){}


  deleteVote(i: number) {
    if (i >= 0 && i < this.voting.length) {
      this.voting.splice(i, 1); 
    }
  }
  exit(){
    this.route.navigate(['admin'])
  }
}
