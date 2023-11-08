import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export const studentauthGuard: CanActivateFn = () => {
  const router=inject(Router)
  const jwt= new JwtHelperService();
  const token=localStorage.getItem('token');
    if(token && !jwt.isTokenExpired(token)){
      try {
        const decodedToken = jwt.decodeToken(token);
        const studentCode = localStorage.getItem('code');
        console.log(decodedToken)
        if (decodedToken.sub === studentCode){
          return true;

        } else{
          router.navigate(['']);
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
