import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';

export class Member {
  president: string;
  vicepresident: string;
  secretary1: string;
  secretary2: string;
  secretary3: string;
  id: number;
  count:number;
  propuestas: string;
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
    }
  ]
  UserComponent: any;

  constructor(private route: Router,) {}


  
}
