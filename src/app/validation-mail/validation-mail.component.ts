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
 correoUsuario: string;
  validationNumber1: string = '';
  validationNumber2: string = '';
  validationNumber3: string = '';
  validationNumber4: string = '';
  validationNumber5: string = '';
  validationNumber6: string = '';
  showAlert:boolean=false;
  

  @ViewChild('template',) template: TemplateRef<any>;
  constructor(private route: Router, private authService: AuthService,private modalService: BsModalService){
    this.correoUsuario = this.authService.getCorreoUsuario();
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

    get correoUsuarioOculto(): string {
      const partes = this.correoUsuario.split('@');
      if (partes.length === 2) {
        const nombreUsuario = partes[0];
        const dominio = partes[1];
        const primeraLetra = nombreUsuario.charAt(0);
        const ultimaLetra = nombreUsuario.charAt(nombreUsuario.length - 1);
        const longitudOcultar = nombreUsuario.length - 2; 
        const caracteresOcultos = '*'.repeat(longitudOcultar);
        return primeraLetra + caracteresOcultos + ultimaLetra + '@' + dominio;
      }
      return this.correoUsuario; 
    }
  }

