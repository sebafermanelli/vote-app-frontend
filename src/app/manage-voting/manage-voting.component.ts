import { Component,TemplateRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { vote } from './vote';



@Component({
  selector: 'app-manage-voting',
  templateUrl: './manage-voting.component.html',
  styleUrls: ['./manage-voting.component.scss']
})
export class ManageVotingComponent {
  voting: vote[]=[]
  id:string | null;
  modalRef?: BsModalRef;
  message?: string;
  showModal = false;
  selectid:string | null;
  vot:any=[]
  
  constructor(
    private route: Router,
    private authservice:AuthService,
    private modalService:BsModalService) {}

 ngOnInit(){
this.loadElections();

 }
  loadElections(){
    this.authservice.getElections().subscribe(
      response => {
        this.voting=response.results
        console.log('aaaaaaaaaa',this.voting)
      })}
 

openModal(template: TemplateRef<any>,id:string) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
    this.selectid=id;  
  }      


  deleteElections(id:string | null){
    if(this.selectid !== null){     
    this.authservice.deleteElections(id)
.subscribe(
    ()=>{
      this.loadElections()
      console.log("Eliminación Exitosa")
    })
      this.selectid=null;
      this.modalRef?.hide();


    }
}      
reload():void{
      this.modalRef?.hide();

}


  start(vote:any){
    vote.startActive=true;
    vote.finishActive=true;
  }
  finish(vote:any){
    vote.startActive=true;
    vote.finishActive=false;
    vote.resultActive=true;
  }
  count(vote:any){
    this.route.navigate(['voting-interface'])
  }


  deleteVote(i: number) {
    if (i >= 0 && i < this.voting.length) {
      this.voting.splice(i, 1); 
    }
  }
  exit(){
    this.route.navigate(['admin'])
  }
  seeList(id: string) {
    this.route.navigate(['listas-admin', id]);
  }


}
