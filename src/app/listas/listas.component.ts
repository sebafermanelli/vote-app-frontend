import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoListasComponent } from '../info-listas/info-listas.component';

class Miembro {
  presidente: string;
  vicepresidente: string;
  secretario1: string;
  secretario2: string;
  secretario3: string;
  id: number;
}

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {

  miembros: Miembro[] = [
    {
    presidente:'Cinel Santiago',
    vicepresidente:'Pepe',
    secretario1:'carlos',
    secretario2:'raul',
    secretario3:'amilcar',
    id:1,
    },
    {
      presidente:'Karlen Esteban',
      vicepresidente:'Pepe',
      secretario1:'carlos',
      secretario2:'raul',
      secretario3:'amilcar',
      id:2,
    },
    {
      presidente:'Andrada Gaston',
      vicepresidente:'Pepe',
      secretario1:'carlos',
      secretario2:'raul',
      secretario3:'amilcar',
      id:3,
    },
    {
      presidente:'Fermanelli Sebastian',
      vicepresidente:'Pepe',
      secretario1:'carlos',
      secretario2:'raul',
      secretario3:'amilcar',
      id:4,
    }
  ]

  constructor(private route: Router) {}

  ngOnInit(): void {}

  moreInfo(id_lista:number) {
    console.log('HOLAAAAAAAAAAAs')
    this.route.navigate(['info_listas',id_lista])
    
  }
}