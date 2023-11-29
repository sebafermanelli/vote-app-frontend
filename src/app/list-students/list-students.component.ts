import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Student } from '../models/student';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss'],
})
export class ListStudentsComponent implements OnInit {
  students: Student[] = [];
  UserComponent: any;
  modalRef?: BsModalRef;
  message?: string;
  showModal = false;
  selectid: string | null;
  studentEdit: Student;
  editStudent: FormGroup;
  options = [
    { value: '1', label: 'Primero' },
    { value: '2', label: 'Segundo' },
    { value: '3', label: 'Tercero' },
    { value: '4', label: 'Cuarto' },
    { value: '5', label: 'Quinto' },
  ];

  constructor(
    private route: Router,
    private authservice: AuthService,
    private modalService: BsModalService,
    private fb: FormBuilder
  ) {
    this.editStudent = this.fb.group({
      studentName: ['', Validators.required],
      studentLastname: ['', Validators.required],
      studentID: ['', Validators.required],
      studentAddress: ['', Validators.required],
      studentEmail: ['', Validators.required],
      studentPhone: ['', Validators.required],
      studentCourse: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.authservice.getStudent().subscribe((response: any) => {
      console.log(response);
      this.students = response.results;
    });
  }

  openModal(template: TemplateRef<any>, id: string) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this.selectid = id;
  }

  volver() {
    this.route.navigate(['admin']);
  }
  deleteStudent(dni: string | null) {
    if (this.selectid !== null) {
      this.authservice.deleteStudents(this.selectid).subscribe(
        () => {
          this.loadData();
          console.log('Eliminacion exitosa');
        },
        (error) => {
          console.log('No se pudo eliminar', error);
        }
      );
      this.selectid = null;
      this.modalRef?.hide();
    }
  }
  reload(): void {
    this.modalRef?.hide();
  }
}
