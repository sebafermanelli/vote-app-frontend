import { Component } from '@angular/core';
import { Router } from '@angular/router';

export class vote{
  id:number;
  desc:string;
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


  seeList(id: number) {
    this.route.navigate(['user', id+1]);
  }
}

