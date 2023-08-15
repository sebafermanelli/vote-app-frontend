import { Component,Input,OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  dni: string = '';
  password: string = '';
  constructor(private route:Router,private dataService: DataService){}
  ngOnInit(): void {
    // Obtener DNI y contraseña desde el servicio
    this.dni = this.dataService.getDNI();
    this.password = this.dataService.getPassword();
  }

}
