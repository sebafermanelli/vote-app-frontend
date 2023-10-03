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
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { setTheme } from 'ngx-bootstrap/utils';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { ValidationMailComponent } from './validation-mail/validation-mail.component';
import { LoadListComponent } from './load-list/load-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ManageVotingComponent } from './manage-voting/manage-voting.component';
import { LoadStudentComponent } from './load-student/load-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateVotingComponent } from './create-voting/create-voting.component';
import { VotingInterfaceComponent } from './voting-interface/voting-interface.component';


@NgModule({
  
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    UserComponent,
    ListasComponent,
    LoginAdminComponent,
    MessageModalComponent,
    ValidationMailComponent,
    LoadListComponent,
    ManageVotingComponent,
    LoadStudentComponent,
    CreateVotingComponent,
    VotingInterfaceComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    ReactiveFormsModule,
    
  ],
  exports:[RouterModule],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
