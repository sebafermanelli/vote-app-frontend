import { Component ,TemplateRef,ViewChild} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-validation-mail',
  templateUrl: './validation-mail.component.html',
  styleUrls: ['./validation-mail.component.scss']
})
export class ValidationMailComponent {
  modalRef: BsModalRef | undefined = undefined;
  validationNumber: string = '';
  userMail: string;
  validationNumber1: string = '';
  validationNumber2: string = '';
  validationNumber3: string = '';
  validationNumber4: string = '';
  validationNumber5: string = '';
  validationNumber6: string = '';
  showAlert:boolean=false;
  

  @ViewChild('template',) template: TemplateRef<any>;
  constructor(private route: Router, private authService: AuthService,private modalService: BsModalService){
    this.userMail = this.authService.getMailUser();
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  submitForm() {
    const userValidationCode = this.validationNumber1 + this.validationNumber2 +
      this.validationNumber3 + this.validationNumber4 +
      this.validationNumber5 + this.validationNumber6;
  
    const userValidationCodeNumber = parseInt(userValidationCode);
  
    if (this.authService.getUsuario().validation === userValidationCodeNumber) {
      this.route.navigate(['user']);
    } else {
      this.showAlert = true;
      this.openModal(this.template);
    }
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

