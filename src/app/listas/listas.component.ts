import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export class Member {
  president: string;
  vicepresident: string;
  secretary1: string;
  secretary2: string;
  secretary3: string;
  id: number;
  count:number;
  propuestas: string;
  id_election:number;
  selected: boolean;
}

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent  {

  @Output() memberSeleccionado = new EventEmitter<number>();

  members: Member[] = [
    {
    president:'Cinel Santiago',
    vicepresident:'Pepe',
    secretary1:'carlos',
    secretary2:'raul',
    secretary3:'amilcar',
    id:1,
    count:0,
    propuestas: 'poner flores',
    id_election:2,
    selected: false,
    },
    {
      president:'Karlen Esteban',
      vicepresident:'Pepe',
      secretary1:'carlos',
      secretary2:'raul',
      secretary3:'amilcar',
      id:2,
      count:0,
      propuestas: 'arreglar el patio',
      id_election:2,
      selected: false,
    },
    {
      president:'Andrada Gaston',
      vicepresident:'Pepe',
      secretary1:'carlos',
      secretary2:'raul',
      secretary3:'amilcar',
      id:3,
      count:0,
      propuestas: 'cambiar la bandera',
      id_election:2,
      selected: false,
    },
    {
      president:'Fermanelli Sebastian',
      vicepresident:'Pepe',
      secretary1:'carlos',
      secretary2:'raul',
      secretary3:'amilcar',
      id:4,
      count:0,
      propuestas: 'nuevos salones',
      id_election:2,
      selected: false,
    },
    {
      president:'Tom Jerry',
      vicepresident:'Pepe',
      secretary1:'carlos',
      secretary2:'raul',
      secretary3:'amilcar',
      id:4,
      count:0,
      propuestas: 'nuevos salones',
      id_election:1,
      selected: false,
    }
  ]
  UserComponent: any;

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      const voteId = +params['voteId'];
      this.members = this.members.filter(member => member.id_election === voteId);
    });
  }
  toggleSelection(member:any) {
    this.members.forEach(m => m.selected = false);
    member.selected=true;
  }
}

  

