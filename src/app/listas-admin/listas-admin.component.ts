import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-listas-admin',
  templateUrl: './listas-admin.component.html',
  styleUrls: ['./listas-admin.component.scss'],
})
export class ListasAdminComponent {
  @Output() memberSeleccionado = new EventEmitter<number>();
  descriptionElection: string;
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
    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      this.id = params.get('id') || '';
      this.authservice.getOneElection(this.id).subscribe((userData) => {
        this.descriptionElection = userData.results.description;
      });
      this.authservice.getListbyElection(this.id).subscribe((response) => {
        this.members = response.results;
      });
    });
  }
  delete(id: number | null) {
    if (this.selectid !== null) {
      this.authservice.deleteList(this.id).subscribe(
        () => {
          this.loadlist();
        },
      );
    }
  }

  volver() {
    this.route.navigate(['manage-voting']);
  }
}
