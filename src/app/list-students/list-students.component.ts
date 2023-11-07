import { Component, EventEmitter, OnInit, Output,TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';




@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.scss']
})




export class ListStudentsComponent implements OnInit{
students:any=[];
UserComponent: any;
 modalRef?: BsModalRef;
  message?: string;
  showModal = false;
  selectid:string | null;

  constructor(
    private route: Router, 
    private authservice:AuthService,
    private modalService:BsModalService) 
    {}

  ngOnInit(){ 
    this.loadData();
  }
 
  loadData(){
  this.authservice.getStudent().subscribe(
    response => {
      this.students = response.results;
  })}

openModal(template:TemplateRef<any>,id:string){
  this.modalRef=this.modalService.show(template,{class: 'modal-sm'});
  this.selectid=id
}

  

  volver(){ 
    this.route.navigate(['admin']);
}
  deleteStudent(dni: string | null) {
    if(this.selectid !== null){ 
    this.authservice.deleteStudents(this.selectid)
      .subscribe(
        ()=>{
              this.loadData();
              console.log("Eliminacion exitosa")
        },
        (error)=>{
          console.log("No se pudo eliminar")
        }
      );
     this.selectid=null;
     this.modalRef?.hide();
      }
    }
reload():void{
      this.modalRef?.hide();

}
    

}

