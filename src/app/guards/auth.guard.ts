import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt'
import { AuthService } from '../auth.service';
export const authGuard: CanActivateFn = () => {
  const route= inject(Router);
  const jwt= new JwtHelperService();
  const token=localStorage.getItem('token');

 
    if (token && !jwt.isTokenExpired(token)) {
      try {
        const decodedToken = jwt.decodeToken(token);
        const adminId = localStorage.getItem('admin_id');
        const studentCode = localStorage.getItem('code');
        console.log(decodedToken)
        if (decodedToken.sub === adminId) {
          // El usuario es un administrador, puede continuar
          return true;
        } else {
          route.navigate(['']);
          return false;
        }
      } catch (error) {
        console.error(error);
        route.navigate(['']);
        return false;
      }
    } else {
      // No se encontró un token, redirigir al inicio de sesión
      route.navigate(['']);
      return false;
    }
  };
