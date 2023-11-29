import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './models/admin';
import { Student } from './models/student';
import { Election } from './models/election';
import { Candidate } from './models/candidate';
import { List } from './models/list';

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
  setCode(code: string) {
    localStorage.setItem('code', code);
  }
  getCode(): string | null {
    return localStorage.getItem('code');
  }

  setToken(token: string, admin_id: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('admin_id', admin_id);
  }
  setTokenUser(token: string, user_id: string): void {
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
  loginUser(student: Student) {
    return this.http.post<string>(`${this.URL}/auth/user/login`, student);
  }

  loadElection(election: Election) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/elections/`, election, {
      headers: header,
    });
  }
  loadList(list: List) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/lists/`, list, { headers: header });
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

  loadStudent(student: Student) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/users/`, student, { headers: header });
  }
  editStudent(student: Student) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put(`${this.URL}/users/${student.id}`, student, {
      headers: header,
    });
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

  loadCandidates(candidate: Candidate) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(`${this.URL}/candidates`, candidate, {
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
      `${this.URL}/electionusers/${this.getUser_id()}/vote`,
      body,
      { headers: header }
    );
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  getAdmin_id(): string {
    const id = localStorage.getItem('admin_id');
    if (id) {
      return id;
    } else {
      return '';
    }
  }
  getUser_id(): string {
    const id = localStorage.getItem('user_id');
    if (id) {
      return id;
    } else {
      return '';
    }
  }

  getElection_id(): string {
    const election_id = localStorage.getItem('election_id');
    if (election_id) {
      return election_id;
    }

    return '';
  }

  getAuthtenticated() {
    return this.isAuthenticated;
  }

  getAdmin() {
    return this.http.get(`${this.URL}/admin`);
  }

  getStudent(): Observable<Student[]> {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Student[]>(`${this.URL}/users`, { headers: header });
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
  getElectionByStudent(id: string) {
    const token = this.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/electionusers/${id}`, {
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
