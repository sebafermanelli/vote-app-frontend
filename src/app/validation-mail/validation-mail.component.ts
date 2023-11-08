import { Component ,TemplateRef,ViewChild} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-validation-mail',
  templateUrl: './validation-mail.component.html',
  styleUrls: ['./validation-mail.component.scss']
})
export class ValidationMailComponent {
  codeNumbers :FormGroup;
  modalRef: BsModalRef | undefined = undefined;
  userMail: string;
  
  showAlert:boolean=false;
  

  @ViewChild('template',) template: TemplateRef<any>;
  constructor
  (private route: Router, private authService: AuthService,private modalService: BsModalService,
   private fb:FormBuilder){
this.codeNumbers=this.fb.group({
  number1:['',[Validators.required]],
  number2:['',[Validators.required]],
  number3:['',[Validators.required]],
  number4:['',[Validators.required]],
  number5:['',[Validators.required]],
  number6:['',[Validators.required]]
})
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  submitForm() {
    const userValidationCode = this.codeNumbers.get('number1')?.value + this.codeNumbers.get('number2')?.value +
      this.codeNumbers.get('number3')?.value + this.codeNumbers.get('number4')?.value +
      this.codeNumbers.get('number5')?.value + this.codeNumbers.get('number6')?.value;
    const dni = this.authService.getId();
    this.authService.setCode(userValidationCode);
    this.authService.loginUser(dni,userValidationCode).subscribe(
        (response:any)=>{
          if(response){
            this.authService.setTokenUser(response.accessToken,response.user.id);
            this.route.navigate(['selection-election']);
          } else {
                this.showAlert = true;
      this.openModal(this.template);
          }

        }, (error)=>{
          console.error(error);
          this.showAlert = true;
      this.openModal(this.template);
        }
           );
  }
    get hiddenMail(): string {
      const partes = this.userMail.split('@');
      if (partes.length === 2) {
        const nameUser = partes[0];
        const domain = partes[1];
        const firstLeter = nameUser.charAt(0);
        const lastLeter = nameUser.charAt(nameUser.length - 1);
        const lengthHide = nameUser.length - 2; 
        const hiddenCharacters = '*'.repeat(lengthHide);
        return firstLeter + hiddenCharacters + lastLeter + '@' + domain;
      }
      return this.userMail; 
    }
  }

