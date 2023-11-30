import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../models/student';
import { BrowserStorageService } from '../storage.service';

@Component({
  selector: 'app-validation-mail',
  templateUrl: './validation-mail.component.html',
  styleUrls: ['./validation-mail.component.scss'],
})
export class ValidationMailComponent {
  codeNumbers: FormGroup;
  modalRef: BsModalRef | undefined = undefined;
  userMail: string;
  student: Student;

  showAlert: boolean = false;

  @ViewChild('template') template: TemplateRef<any>;
  @ViewChild('inputFields') inputFields: ElementRef;
  constructor(
    private route: Router,
    private authService: AuthService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private ls: BrowserStorageService
  ) {
    this.codeNumbers = this.fb.group({
      number1: ['', [Validators.required]],
      number2: ['', [Validators.required]],
      number3: ['', [Validators.required]],
      number4: ['', [Validators.required]],
      number5: ['', [Validators.required]],
      number6: ['', [Validators.required]],
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  submitForm() {
    const userValidationCode =
      this.codeNumbers.get('number1')?.value +
      this.codeNumbers.get('number2')?.value +
      this.codeNumbers.get('number3')?.value +
      this.codeNumbers.get('number4')?.value +
      this.codeNumbers.get('number5')?.value +
      this.codeNumbers.get('number6')?.value;

    const student: Student = {
      id: this.ls.getUserId(),
      loginCode: userValidationCode,
    };
    this.authService.loginUser(student).subscribe(
      (response: any) => {
        if (response) {
          this.ls.setUser(response.accessToken, response.user.id);
          this.ls.setCode(userValidationCode);
          this.route.navigate(['selection-election']);
        } else {
          this.showAlert = true;
          this.openModal(this.template);
        }
      },
      (error) => {
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
  onInputKeyup(event: any, index: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value.length === 1) {
      const nextIndex = index + 1;
      if (nextIndex < this.inputFields.nativeElement.children.length) {
        const nextInput =
          this.inputFields.nativeElement.children[nextIndex].querySelector(
            'input'
          );
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }
}
