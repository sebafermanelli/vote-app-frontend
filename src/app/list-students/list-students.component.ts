import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

export class Student{
  name:string;
  lastname:string;
  dni:string;
  email:string;
  address:string;
  phone:string;
  course:number;
  photo:string;
}


@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})




export class ListStudentsComponent {
  @Output() memberSeleccionado = new EventEmitter<number>();
  students: Student[] =[
    {
      name: 'Coco',
    lastname: 'James',
    dni: '12345678',
    email: 'cocojames@gmail.com',
    address: 'Cordoba 123',
    phone: '341414141',
    course:5,
    photo: '',
    } , {
      name: 'Laura',
    lastname: 'Toc',
    dni: '47895563',
    email: 'lauratoc@gmail.com',
    address: 'Cordoba 2589',
    phone: '364788951',
    course:3,
    photo: '',
    },  {
      name: 'Tomas',
    lastname: 'Panadero',
    dni: '22554477',
    email: 'tomaspanadero@gmail.com',
    address: 'Catamarca 123',
    phone: '78999663',
    course:1,
    photo:'',
  }]



  UserComponent: any;

  constructor(private route: Router) {}

  volver(){
    this.route.navigate(['admin']);
  }
  drop(i: number) {
    if (i >= 0 && i < this.students.length) {
      this.students.splice(i, 1); 
    }
  }


}
