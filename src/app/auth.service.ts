import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private isAuthenticated = false;
  private URL='http://localhost:3000/api'
  private id:string;

  constructor(private http:HttpClient){

  }
  
  loginAdmin(username:string,password:string):Observable<any>{
    const body = {
      username:username ,
      password:password
    };
return this.http.post<any>(`${this.URL}/auth/admin/login`,body)

  }

 emailCode(id:string) :Observable<string>{
const dni = {
  id:id
};
return this.http.put<string>(`${this.URL}/users/${id}/code`,dni)

 }
setToken(token:string): void {
localStorage.setItem('token',token);
}
getToken():string| null {
  return localStorage.getItem('token');
}

removeToken():void{
  localStorage.removeItem('token');
}
loginUser(id:string, code:string) :Observable<string> { 
    const body = {
      id:id,
     login_code:code
    };
return this.http.post<string>(`${this.URL}/auth/user/login`,body)  
}

  getAuthtenticated() {
    return this.isAuthenticated;
  }

 getAdmin() {
    return this.http.get( `${this.URL}/admin`);
  }

  setId(id:string):void{
    this.id=id;
  }

  getId():string{
    return this.id;
  }


}