import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login_usuario/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { ListasComponent } from './listas/listas.component';
import { InfoListasComponent } from './info-listas/info-listas.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta para el componente LoginComponent
  { path: 'user', component: UserComponent }, // Ruta para el componente UserComponent
  { path: 'admin', component: AdminComponent}, // Ruta para el componente AdminComponent
  { path: 'listas', component:ListasComponent}, // Ruta para el componente ListasComponent
  { path: 'info_listas/:id',component:InfoListasComponent}, // Ruta para el componente InfoListasComponent
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
