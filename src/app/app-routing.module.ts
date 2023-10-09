import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-usuario/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ListasComponent } from './listas/listas.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { ValidationMailComponent } from './validation-mail/validation-mail.component';
import { LoadListComponent } from './load-list/load-list.component';
import { ManageVotingComponent } from './manage-voting/manage-voting.component';
import { LoadStudentComponent } from './load-student/load-student.component';
import { CreateVotingComponent } from './create-voting/create-voting.component';
import {VotingInterfaceComponent} from './voting-interface/voting-interface.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ListasAdminComponent } from './listas-admin/listas-admin.component';
import { LoadCandidatesComponent } from './load-candidates/load-candidates.component';


const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta para el componente LoginComponent
  { path: 'user', component: UserComponent }, // Ruta para el componente UserComponent
  { path: 'admin', component: AdminComponent}, // Ruta para el componente AdminComponent
  { path: 'listas', component:ListasComponent}, // Ruta para el componente ListasComponent
  { path: 'login-admin',component:LoginAdminComponent}, // Ruta para el componente LoginAdminComponent
  { path: 'message',component:MessageModalComponent}, // Ruta para el componente MessageComponent
  { path: 'validation',component:ValidationMailComponent}, //Ruta para el componente ValidationmailComponent
  { path: 'load-list',component:LoadListComponent}, //Ruta para el componente LoadListComponent
  { path: 'manage-voting', component:ManageVotingComponent}, //Ruta para el componente ManageVotingComponent
  { path: 'load-student', component:LoadStudentComponent}, //Ruta para el componente LoadStudentComponent
  { path: 'create-voting', component:CreateVotingComponent}, //Ruta para el componente CreateVotingComponent
  { path: 'voting-interface', component:VotingInterfaceComponent}, //Ruta para el componente de VotingInterfaceComponent
  { path: 'list-students', component:ListStudentsComponent}, //Ruta para el componente ListStudentComponent
  { path: 'listas-admin/:voteId',component:ListasAdminComponent}, //Ruta para el componente ListasAdminComponent
  { path: 'load-candidates',component:LoadCandidatesComponent}, //Ruta para el componente LoadCandidatesComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
