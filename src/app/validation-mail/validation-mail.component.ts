import { Component ,TemplateRef} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-validation-mail',
  templateUrl: './validation-mail.component.html',
  styleUrls: ['./validation-mail.component.scss']
})
export class ValidationMailComponent {
 
    validationNumber: string = '';
    showAlert:boolean=false;
  constructor(private route: Router, private authService: AuthService){}

  

    submitForm() {
      const userValidation = Number(this.validationNumber); 
  
      if (this.authService.getUsuario().validation === userValidation) {
        this.route.navigate(['user']);
      } else {
        this.showAlert=true;
      }
    }
  }

