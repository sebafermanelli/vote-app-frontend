import { Component, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from '../auth.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-load-student',
  templateUrl: './load-student.component.html',
  styleUrls: ['./load-student.component.scss'],
})
export class LoadStudentComponent {
  loadStudent: FormGroup;
  modalRef?: BsModalRef;
  message?: string;
  showModal = false;
  options = [
    { value: '1', label: 'Primero' },
    { value: '2', label: 'Segundo' },
    { value: '3', label: 'Tercero' },
    { value: '4', label: 'Cuarto' },
    { value: '5', label: 'Quinto' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authservice: AuthService
  ) {
    this.loadStudent = this.fb.group({
      studentName: ['', Validators.required],
      studentLastname: ['', Validators.required],
      studentID: ['', Validators.required],
      studentAddress: ['', Validators.required],
      studentEmail: [
        '',
        [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)],
      ],
      studentPhone: ['', Validators.required],
      studentCourse: ['', Validators.required],
    });
  }
  load() {
    if (this.loadStudent.valid) {
      const student: Student = {
        id: this.loadStudent.get('studentID')?.value,
        name: this.loadStudent.get('studentName')?.value,
        lastName: this.loadStudent.get('studentLastname')?.value,
        course: this.loadStudent.get('studentCourse')?.value,
        address: this.loadStudent.get('studentAddress')?.value,
        email: this.loadStudent.get('studentEmail')?.value,
        phone: this.loadStudent.get('studentPhone')?.value,
      };
      this.authservice.loadStudent(student).subscribe(
        (response: any) => {
          if (response) {
            this.exit();
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  name() {
    return (
      this.loadStudent.get('studentName')?.touched &&
      this.loadStudent.get('studentName')?.hasError('required')
    );
  }
  lastName() {
    return (
      this.loadStudent.get('studentLastname')?.touched &&
      this.loadStudent.get('studentLastname')?.errors?.['required']
    );
  }
  id() {
    return (
      this.loadStudent.get('studentID')?.touched &&
      this.loadStudent.get('studentID')?.errors?.['required']
    );
  }
  mail1() {
    return (
      this.loadStudent.get('studentEmail')?.touched &&
      this.loadStudent.get('studentEmail')?.invalid
    );
  }
  mail2() {
    return (
      this.loadStudent.get('studentEmail')?.touched &&
      this.loadStudent.get('studentEmail')?.valid
    );
  }
  mail3() {
    return (
      this.loadStudent.get('studentEmail')?.touched &&
      this.loadStudent.get('studentEmail')?.hasError('pattern')
    );
  }
  address() {
    return (
      this.loadStudent.get('studentAddress')?.touched &&
      this.loadStudent.get('studentAddress')?.errors?.['required']
    );
  }
  phone() {
    return (
      this.loadStudent.get('studentPhone')?.touched &&
      this.loadStudent.get('studentPhone')?.errors?.['required']
    );
  }

  exit() {
    this.router.navigate(['admin']);
  }
}
