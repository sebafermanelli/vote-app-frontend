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
import { VotingInterfaceComponent } from './voting-interface/voting-interface.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import { ListasAdminComponent } from './listas-admin/listas-admin.component';
import { LoadCandidatesComponent } from './load-candidates/load-candidates.component';
import { SelectionElectionUserComponent } from './selection-election-user/selection-election-user.component';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'user/:id',
    component: UserComponent,
    canActivate: [authGuard],
    data: { userType: 'student' },
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    data: { userType: 'admin' },
  },
  {
    path: 'login-admin',
    component: LoginAdminComponent,
  },
  {
    path: 'message',
    component: MessageModalComponent,
    canActivate: [authGuard],
    data: { userType: 'student' },
  },
  { path: 'validation', component: ValidationMailComponent },
  {
    path: 'load-list',
    component: LoadListComponent,
    canActivate: [authGuard],
    data: { userType: 'admin' },
  },
  {
    path: 'manage-voting',
    component: ManageVotingComponent,
    canActivate: [authGuard],
    data: { userType: 'admin' },
  },
  {
    path: 'load-student',
    component: LoadStudentComponent,
    canActivate: [authGuard],
    data: { userType: 'admin' },
  },
  {
    path: 'create-voting',
    component: CreateVotingComponent,
    canActivate: [authGuard],
    data: { userType: 'admin' },
  },
  {
    path: 'voting-interface/:id',
    component: VotingInterfaceComponent,
    canActivate: [authGuard],
    data: { userType: 'admin' },
  },
  {
    path: 'list-students',
    component: ListStudentsComponent,
    canActivate: [authGuard],
    data: { userType: 'admin' },
  },
  {
    path: 'listas-admin/:id',
    component: ListasAdminComponent,
    canActivate: [authGuard],
    data: { userType: 'admin' },
  },
  {
    path: 'load-candidates',
    component: LoadCandidatesComponent,
    canActivate: [authGuard],
    data: { userType: 'admin' },
  },
  {
    path: 'selection-election',
    component: SelectionElectionUserComponent,
    canActivate: [authGuard],
    data: { userType: 'student' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
