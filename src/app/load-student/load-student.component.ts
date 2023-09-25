import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-load-student',
  templateUrl: './load-student.component.html',
  styleUrls: ['./load-student.component.scss']
})
export class LoadStudentComponent {
loadStudent:FormGroup

constructor(private fb:FormBuilder){

  this.loadStudent=this.fb.group({
    studentName:['',Validators.required],
    studentLastname:['',Validators.required],
    studentAdress:['',Validators.required],
    studentEmail:['',Validators.required,Validators.email],
    studentPhone:['',Validators.required],



  })
}
}
