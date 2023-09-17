import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';

export class vote{
  id:number;
  desc:string;
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
    },
    {
      id:2,
      desc:'Representante interescolar',
    },
    {
      id:3,
      desc:'Delegados',
    }
  ]
  constructor(private route: Router,) {}

  

  start(){}
  finish(){}
  count(){}
  deleteVote(i: number) {
    if (i >= 0 && i < this.voting.length) {
      this.voting.splice(i, 1); 
    }
  }
  exit(){
    this.route.navigate(['admin'])
  }
}
