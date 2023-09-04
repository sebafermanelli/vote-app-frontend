import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-usuario/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ListasComponent } from './listas/listas.component';
import { InfoListasComponent } from './info-listas/info-listas.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { ValidationMailComponent } from './validation-mail/validation-mail.component';


const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta para el componente LoginComponent
  { path: 'user', component: UserComponent }, // Ruta para el componente UserComponent
  { path: 'admin', component: AdminComponent}, // Ruta para el componente AdminComponent
  { path: 'listas', component:ListasComponent}, // Ruta para el componente ListasComponent
  { path: 'info_listas/:id',component:InfoListasComponent}, // Ruta para el componente InfoListasComponent
  { path: 'login-admin',component:LoginAdminComponent}, // Ruta para el componente LoginAdminComponent
  { path: 'message',component:MessageModalComponent}, // Ruta para el componente MessageComponent
  { path: 'validation',component:ValidationMailComponent}, //Ruta para el componente Validation-mailComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
