import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private URL = 'http://localhost:3000/api';
  private id: string;

  constructor(private http: HttpClient) {}

  emailCode(id: string): Observable<string> {
    const dni = {
      id: id,
    };
    return this.http.put<string>(`${this.URL}/users/${id}/code`, dni);
  }
  setCode(code:string){
    localStorage.setItem('code',code)

  }
  getCode():string|null{

    return localStorage.getItem('code')
  }
  
  setToken(token: string, admin_id: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('admin_id', admin_id);
  }
   setTokenUser(token: string, user_id:string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user_id', user_id);
  }

  setElection_id(election_id: string): void {
    localStorage.setItem('election_id', election_id);
  }

  removeToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('admin_id');
  }

  loginAdmin(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password,
    };
    return this.http.post<string>(`${this.URL}/auth/admin/login`, body);
  }
  loginUser(id: string, code: string): Observable<string> {
    const body = {
      id: id,
      login_code: code,
    };
    return this.http.post<string>(`${this.URL}/auth/user/login`, body);
  }

  loadElection(admin_id: string | null, description: string) {
    const body = {
      admin_id: admin_id,
      description: description,
    };
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/elections/`, body, { headers: header });
  }
  loadList(
    election_id: string | null,
    description: string,
    rol1_id: string,
    rol2_id: string,
    rol3_id: string
  ) {
    const body = {
      election_id: election_id,
      description: description,
      rol1_id: rol1_id,
      rol2_id: rol2_id,
      rol3_id: rol3_id,
    };
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/lists/`, body, { headers: header });
  }

  loadDelegation(election_id: string) {
    const body = {
      election_id: election_id,
    };
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/delegations`, body, { headers: header });
  }

  loadStudent(
    id: string,
    name: string,
    last_name: string,
    course: string,
    address: string,
    email: string,
    phone: string
  ) {
    const body = {
      id: id,
      name: name,
      last_name: last_name,
      course: course,
      address: address,
      email: email,
      phone: phone,
    };
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/users/`, body, { headers: header });
  }

  loadListRoles(
    order: number,
    list_id: string,
    role_id: string,
    candidate_id: string
  ) {
    const body = {
      order: order,
      list_id: list_id,
      role_id: role_id,
      candidate_id: candidate_id,
    };
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(`${this.URL}/listroles`, body, {
      headers: header,
    });
  }

  loadCandidates(user_id: string) {
    const body = {
      user_id: user_id,
    };
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(`${this.URL}/candidates`, body, {
      headers: header,
    });
  }

  loadElectionUser(id: string) {
    const body = {};
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/electionusers/${id}/generate`, body, {
      headers: header,
    });
  }
  loadVote(vote: any) {
    const body = vote;
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put(
      `${this.URL}/electionusers/${this.getAdmin_id()}/vote`,
      body,
      { headers: header }
    );
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getAdmin_id(): string | null {
    return localStorage.getItem('id');
  }
  getElection_id(): string | null {
    return localStorage.getItem('election_id');
  }

  getAuthtenticated() {
    return this.isAuthenticated;
  }

  getAdmin() {
    return this.http.get(`${this.URL}/admin`);
  }
  getId(): string {
    return this.id;
  }
  getStudent() {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(`${this.URL}/users`, { headers: header });
  }
  getOneStudent(id: string) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(`${this.URL}/users/${id}`, { headers: header });
  }
  getOneList(id: string) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/lists/${id}`, { headers: header });
  }
  getOneElection(id: string) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/elections/${id}`, {
      headers: header,
    });
  }
  getNotVotedYet(user_id: string) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(
      `${this.URL}/electionusers/${user_id}/notvotedyet`,
      { headers: header }
    );
  }

  getElections() {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/elections`, { headers: header });
  }

  getListbyElection(id: string) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/elections/${id}/lists`, {
      headers: header,
    });
  }

  getList() {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/lists`, { headers: header });
  }

  getElectionDelegation(id: string) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/elections/${id}/delegation`, {
      headers: header,
    });
  }

  finalizated(id: string) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put(
      `${this.URL}/elections/${id}/finalize`,
      {},
      { headers: header }
    );
  }
  setId(id: string): void {
    this.id = id;
  }

  deleteStudents(id: string | null) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.delete<any>(`${this.URL}/users/${id}`, {
      headers: header,
    });
  }

  deleteList(id: string | null) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<any>(`${this.URL}/lists/${id}`, {
      headers: header,
    });
  }

  deleteElections(id: string | null) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<any>(`${this.URL}/elections/${id}`, {
      headers: header,
    });
  }
}
