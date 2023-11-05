import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent {
  @Output() memberSeleccionado = new EventEmitter<number>();

  list: string;
  id: string;
  name: string;

  members: any = [];
  selectMember: any = null; 

  constructor(private activatedRoute: ActivatedRoute, private authservice: AuthService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
      console.log(this.id);
      this.authservice.getListbyElection(this.id).subscribe((response) => {
        this.members = response.results;
        console.log(response);
      });
    });
  }

  selectMembers(miembro: any) {
    if (this.selectMember) {
      this.selectMember.selected = false; 
    }
    miembro.selected = true; 
    this.selectMember = miembro;
    this.memberSeleccionado.emit(miembro.id);
  }
}
