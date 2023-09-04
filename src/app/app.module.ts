import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login-usuario/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListasComponent } from './listas/listas.component';
import { InfoListasComponent } from './info-listas/info-listas.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { setTheme } from 'ngx-bootstrap/utils';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { ValidationMailComponent } from './validation-mail/validation-mail.component';

@NgModule({
  
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    UserComponent,
    ListasComponent,
    InfoListasComponent,
    LoginAdminComponent,
    MessageModalComponent,
    ValidationMailComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
