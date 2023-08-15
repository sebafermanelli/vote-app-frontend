import { Component, OnInit } from '@angular/core';
import { ListasComponent } from '../listas/listas.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-listas',
  templateUrl: './info-listas.component.html',
  styleUrls: ['./info-listas.component.scss']
})
export class InfoListasComponent implements OnInit{
  idLista:number|null=null;
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.idLista = +idParam;
      }
    });
    }
  }
