import { HttpClient, HttpHeaders } from '@angular/common/http';
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
return this.http.post<string>(`${this.URL}/auth/admin/login`,body)

  }

 emailCode(id:string) :Observable<string>{
const dni = {
  id:id
};
return this.http.put<string>(`${this.URL}/users/${id}/code`,dni)

 }
setToken(token:string,admin_id:string): void {
localStorage.setItem('token',token);
localStorage.setItem('admin_id',admin_id);
}
getToken():string| null {
  return localStorage.getItem('token');
}
getAdmin_id():string | null{

    return localStorage.getItem('admin_id');
  }



removeToken():void{
  localStorage.removeItem('token');
  localStorage.removeItem('admin_id');
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
loadElection(admin_id:string|null,description:string){
  const body={
    admin_id:admin_id,
    description:description,
  } 
  const token = this.getToken();
  const header=new HttpHeaders({
    'Authorization':`Bearer ${token}`
  }) 
  return this.http.post(`${this.URL}/elections/`,body,{headers:header})
}

  loadStudent(id:string,name:string,last_name:string,course:string,address:string,email:string,phone:string,photo:FormData){
    const body = {
      id:id,
      name:name,
      last_name:last_name,
      course:course,
      address:address,
      email:email,
      phone:phone,
      image:photo
                  }
        const token = this.getToken();
        const header=new HttpHeaders({
          'Authorization':`Bearer ${token}`
        })         
      return this.http.post(`${this.URL}/users/`,body,{headers:header})
  

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
  getStudent(){
    const token = this.getToken();
    const header=new HttpHeaders({
      'Authorization':`Bearer ${token}`})
          
    return this.http.get<any>(`${this.URL}/users`,{headers:header});
  }
  deleteStudents(id:string){
    const token = this.getToken();
    const header=new HttpHeaders({
      'Authorization':`Bearer ${token}`})
          
    return this.http.delete<any>(`${this.URL}/users/${id}`,{headers:header});

  }
 getStudentImageURL(imageBlob: Blob): string {
    if (imageBlob) {
      return URL.createObjectURL(imageBlob);
    } else {
      // URL de imagen por defecto si no hay imagen
      return 'assets/default-image.png';
    }
  }


}