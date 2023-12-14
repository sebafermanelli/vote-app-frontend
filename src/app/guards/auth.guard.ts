import { inject, Injectable, InjectionToken } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BrowserStorageService } from '../storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const type: 'admin' | 'student' = route.data['userType'];
  const router = inject(Router);
  const jwt = new JwtHelperService();
  const storageService = inject(BrowserStorageService);
  const token = storageService.getToken();

  const validateAdmin = (decodedToken: any): boolean => {
    const adminId = storageService.getAdminId();
    return decodedToken.sub === adminId;
  };

  const validateStudent = (decodedToken: any): boolean => {
    const studentCode = storageService.getCode();
    return decodedToken.sub === studentCode;
  };

  const handleInvalidToken = (): void => {
    storageService.clear();
    router.navigate(['']);
  };

  if (token && !jwt.isTokenExpired(token)) {
    try {
      const decodedToken = jwt.decodeToken(token);
      if (type === 'admin' && validateAdmin(decodedToken)) {
        // El usuario es un administrador, puede continuar
        return true;
      } else if (type === 'student' && validateStudent(decodedToken)) {
        return true;
      } else {
        handleInvalidToken();
        return false;
      }
    } catch (error) {
      console.error(error);
      handleInvalidToken();
      return false;
    }
  } else {
    // No se encontró un token, redirigir al inicio de sesión
    handleInvalidToken();
    return false;
  }
};
