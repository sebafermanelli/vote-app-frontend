import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})




export class ListStudentsComponent implements OnInit{
  @Output() memberSeleccionado = new EventEmitter<number>();  
students:any=[];
UserComponent: any;

  constructor(private route: Router, private authservice:AuthService) {}

  ngOnInit(){ 
    this.loadData();
  }
 
  loadData(){
  this.authservice.getStudent().subscribe(
    response => {
      this.students = response.results;
    
  })}


 
  volver(){
    this.route.navigate(['admin']);
}
  drop(dni: string) {
      this.authservice.deleteStudents(dni)
      .subscribe(
        ()=>{
              this.loadData();
              console.log("Eliminacion exitosa")
        },
        (error)=>{
          console.log("No se pudo eliminar")
        }
      );
      }
  
    }

