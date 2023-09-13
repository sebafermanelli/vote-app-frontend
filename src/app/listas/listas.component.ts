import { Component, OnInit,EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';

export class Miembro {
  presidente: string;
  vicepresidente: string;
  secretario1: string;
  secretario2: string;
  secretario3: string;
  id: number;
  cantidad:number;
}

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent  {

  @Output() miembroSeleccionado = new EventEmitter<number>();

  miembros: Miembro[] = [
    {
    presidente:'Cinel Santiago',
    vicepresidente:'Pepe',
    secretario1:'carlos',
    secretario2:'raul',
    secretario3:'amilcar',
    id:1,
    cantidad:0,
    },
    {
      presidente:'Karlen Esteban',
      vicepresidente:'Pepe',
      secretario1:'carlos',
      secretario2:'raul',
      secretario3:'amilcar',
      id:2,
      cantidad:0,
    },
    {
      presidente:'Andrada Gaston',
      vicepresidente:'Pepe',
      secretario1:'carlos',
      secretario2:'raul',
      secretario3:'amilcar',
      id:3,
      cantidad:0,
    },
    {
      presidente:'Fermanelli Sebastian',
      vicepresidente:'Pepe',
      secretario1:'carlos',
      secretario2:'raul',
      secretario3:'amilcar',
      id:4,
      cantidad:0,
    }
  ]
  UserComponent: any;

  constructor(private route: Router,) {}

  moreInfo(id_lista:number) {
    this.route.navigate(['info_listas',id_lista])
    
  }
  deleteLista(index:number){
    if (confirm('¿Estás seguro de que deseas eliminar esta lista?')) {
      this.miembros.splice(index, 1);
    }
  }
}
