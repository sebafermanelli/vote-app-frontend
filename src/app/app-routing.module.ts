import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-usuario/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
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
import { SelectionElectionUserComponent } from './selection-election-user/selection-election-user.component';
import { authGuard } from './guards/auth.guard';
import { studentauthGuard } from './guards/studentauth.guard';




const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'user/:id', component: UserComponent }, 
  { path: 'admin', component: AdminComponent}, 
  { path: 'login-admin',component:LoginAdminComponent}, 
  { path: 'message',component:MessageModalComponent}, 
  { path: 'validation',component:ValidationMailComponent}, 
  { path: 'load-list',component:LoadListComponent}, 
  { path: 'manage-voting', component:ManageVotingComponent},
  { path: 'load-student', component:LoadStudentComponent}, 
  { path: 'create-voting', component:CreateVotingComponent}, 
  { path: 'voting-interface/:id', component:VotingInterfaceComponent}, 
  { path: 'list-students', component:ListStudentsComponent}, 
  { path: 'listas-admin/:id',component:ListasAdminComponent}, 
  { path: 'load-candidates',component:LoadCandidatesComponent}, 
  { path: 'selection-election',component:SelectionElectionUserComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
