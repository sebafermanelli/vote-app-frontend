import { Component, EventEmitter, Output} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-listas-admin',
  templateUrl: './listas-admin.component.html',
  styleUrls: ['./listas-admin.component.scss']
})
export class ListasAdminComponent {

  @Output() memberSeleccionado = new EventEmitter<number>(); 

  list:string;
  id:string;
  name:string;

  members: any=[]

  UserComponent: any;
  constructor(
    private route: Router, 
    private activatedRoute: ActivatedRoute, 
    private authservice:AuthService,
    private router:ActivatedRoute)
    {}

ngOnInit(){
 this.activatedRoute.paramMap.subscribe(params => {
    this.id = params.get('id') || '';
    console.log(this.id)
  this.authservice.getListbyElection(this.id).subscribe(
  response => {
    this.members=response.results;
    console.log(response)
  })
});
}
delete(id: number) {
      {
        if (id >= 0 && id < this.members.length) {
          this.members.splice(id, 1); 
        }
      }
    }
    volver(){
      this.route.navigate(['manage-voting'])
    }
  }