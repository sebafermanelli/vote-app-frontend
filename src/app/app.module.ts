import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login-usuario/login.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
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
import { ListStudentsComponent } from './list-students/list-students.component';
import { ListasAdminComponent } from './listas-admin/listas-admin.component';
import { LoadCandidatesComponent } from './load-candidates/load-candidates.component';
import {HttpClientModule }  from '@angular/common/http';
import { SelectionElectionUserComponent } from './selection-election-user/selection-election-user.component';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './interceptor.service';
import { CommonModule } from '@angular/common';




@NgModule({
  
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    UserComponent,
    LoginAdminComponent,
    MessageModalComponent,
    ValidationMailComponent,
    LoadListComponent,
    ManageVotingComponent,
    LoadStudentComponent,
    CreateVotingComponent,
    VotingInterfaceComponent,
    ListStudentsComponent,
    ListasAdminComponent,
    LoadCandidatesComponent,
    SelectionElectionUserComponent,

 

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
    HttpClientModule,
    JwtModule,
    CommonModule,
  ],
  
  exports:[RouterModule],
  providers: [BsModalService,
             {
              provide: HTTP_INTERCEPTORS,
              useClass: AuthInterceptorService,
              multi: true
             }],
  bootstrap: [AppComponent]
})
export class AppModule { }
