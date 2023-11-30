import { inject, Injectable, InjectionToken } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BrowserStorageService } from '../storage.service';

export const authGuard: CanActivateFn = () => {
  const route = inject(Router);
  const jwt = new JwtHelperService();
  const storageService = inject(BrowserStorageService);

  const canActivate = (): boolean => {
    const token = storageService.getToken();

    if (token && !jwt.isTokenExpired(token)) {
      try {
        const decodedToken = jwt.decodeToken(token);
        const adminId = storageService.getAdminId();
        const studentCode = storageService.getCode();

        if (decodedToken.sub === adminId) {
          // El usuario es un administrador, puede continuar
          return true;
        } else {
          redirectToLogin();
          return false;
        }
      } catch (error) {
        console.error(error);
        redirectToLogin();
        return false;
      }
    } else {
      // No se encontró un token, redirigir al inicio de sesión
      redirectToLogin();
      return false;
    }
  };

  const redirectToLogin = (): void => {
    route.navigate(['']);
  };

  return canActivate();
};
