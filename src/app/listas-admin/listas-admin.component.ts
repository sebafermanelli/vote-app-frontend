import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-listas-admin',
  templateUrl: './listas-admin.component.html',
  styleUrls: ['./listas-admin.component.scss'],
})
export class ListasAdminComponent {
  @Output() memberSeleccionado = new EventEmitter<number>();
  description_election: string;
  list: string;
  id: string;
  name: string;
  selectid: string | null;
  members: any = [];

  UserComponent: any;
  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private authservice: AuthService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadlist();
  }

  loadlist() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
      this.authservice.getOneElection(this.id).subscribe((userData) => {
        this.description_election = userData.results.description;
      });
      this.authservice.getListbyElection(this.id).subscribe((response) => {
        this.members = response.results;
        console.log(response);
      });
    });
  }
  delete(id: number | null) {
    if (this.selectid !== null) {
      this.authservice.deleteList(this.id).subscribe(
        () => {
          this.loadlist();
          console.log('Eliminacion exitosa');
        },
        (error) => {
          console.log('No se pudo eliminar');
        }
      );
    }
  }

  volver() {
    this.route.navigate(['manage-voting']);
  }
}
