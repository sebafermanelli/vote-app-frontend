import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../auth.service';

export const studentauthGuard: CanActivateFn = () => {
  const router=inject(Router)
  const authService=inject(AuthService)
  const jwt= new JwtHelperService();
  const token=localStorage.getItem('token');
    if(token && !jwt.isTokenExpired(token)){
      try {
        const decodedToken = jwt.decodeToken(token);
        const studentid = authService.getCode();
        console.log(decodedToken)
        console.log(studentid)

        if (decodedToken.sub === studentid){
          console.log('Autenticado')
          return true;

        } else{
          router.navigate([''])
          return false;
        }
      }catch(error){
          console.error(error)
          router.navigate(['']);
          return false
      }
} else {
    router.navigate(['']);
      return false;
}
}
