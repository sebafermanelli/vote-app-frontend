import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Ruta para el componente LoginComponent
  { path: 'user', component: UserComponent }, // Ruta para el componente UserComponent
  { path: 'admin', component: AdminComponent},// Ruta para el componente AdminComponent
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
