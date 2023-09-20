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
    },
    {
      president:'Karlen Esteban',
      vicepresident:'Pepe',
      secretary1:'carlos',
      secretary2:'raul',
      secretary3:'amilcar',
      id:2,
      count:0,
    },
    {
      president:'Andrada Gaston',
      vicepresident:'Pepe',
      secretary1:'carlos',
      secretary2:'raul',
      secretary3:'amilcar',
      id:3,
      count:0,
    },
    {
      president:'Fermanelli Sebastian',
      vicepresident:'Pepe',
      secretary1:'carlos',
      secretary2:'raul',
      secretary3:'amilcar',
      id:4,
      count:0,
    }
  ]
  UserComponent: any;

  constructor(private route: Router,) {}

  moreInfo(id_lista:number) {
    this.route.navigate(['info_listas',id_lista])
    
  }
  deleteLista(index:number){
    if (confirm('¿Estás seguro de que deseas eliminar esta lista?')) {
      this.members.splice(index, 1);
    }
  }
}
