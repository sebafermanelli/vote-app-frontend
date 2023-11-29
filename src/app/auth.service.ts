import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './models/admin';
import { Student } from './models/student';
import { Election } from './models/election';
import { Candidate } from './models/candidate';
import { List } from './models/list';
import { BrowserStorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private ls: BrowserStorageService) {}

  emailCode(id: string): Observable<string> {
    const dni = {
      id: id,
    };
    return this.http.put<string>(`${this.URL}/users/${id}/code`, dni);
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
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/elections/`, election, {
      headers: header,
    });
  }
  loadList(list: List) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/lists/`, list, { headers: header });
  }

  loadDelegation(election_id: string) {
    const body = {
      election_id: election_id,
    };
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/delegations`, body, { headers: header });
  }

  loadStudent(student: Student) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/users/`, student, { headers: header });
  }

  loadListRoles(
    order: number,
    list_id: string,
    role_id: string,
    candidate_id: string
  ) {
    const body = {
      order,
      list_id,
      role_id,
      candidate_id,
    };
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(`${this.URL}/listroles`, body, {
      headers: header,
    });
  }

  loadCandidates(candidate: Candidate) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<any>(`${this.URL}/candidates`, candidate, {
      headers: header,
    });
  }

  loadElectionUser(id: string) {
    const body = {};
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(`${this.URL}/electionusers/${id}/generate`, body, {
      headers: header,
    });
  }
  loadVote(vote: any) {
    const body = vote;
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put(
      `${this.URL}/electionusers/${this.ls.getUserId()}/vote`,
      body,
      { headers: header }
    );
  }
  getAdmin() {
    return this.http.get(`${this.URL}/admin`);
  }

  getStudent(): Observable<Student[]> {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Student[]>(`${this.URL}/users`, { headers: header });
  }
  getOneStudent(id: string) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(`${this.URL}/users/${id}`, { headers: header });
  }
  getOneList(id: string) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/lists/${id}`, { headers: header });
  }
  getOneElection(id: string) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/elections/${id}`, {
      headers: header,
    });
  }
  getNotVotedYet(user_id: string) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(
      `${this.URL}/electionusers/${user_id}/notvotedyet`,
      { headers: header }
    );
  }

  getElections() {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/elections`, { headers: header });
  }

  getListbyElection(id: string) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/elections/${id}/lists`, {
      headers: header,
    });
  }
  getElectionByStudent(id: string) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/electionusers/${id}`, {
      headers: header,
    });
  }

  getList() {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/lists`, { headers: header });
  }

  getElectionDelegation(id: string) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any>(`${this.URL}/elections/${id}/delegation`, {
      headers: header,
    });
  }

  finalizated(id: string) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.put(
      `${this.URL}/elections/${id}/finalize`,
      {},
      { headers: header }
    );
  }
  deleteStudents(id: string | null) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.delete<any>(`${this.URL}/users/${id}`, {
      headers: header,
    });
  }

  deleteList(id: string | null) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<any>(`${this.URL}/lists/${id}`, {
      headers: header,
    });
  }

  deleteElections(id: string | null) {
    const token = this.ls.getToken();
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<any>(`${this.URL}/elections/${id}`, {
      headers: header,
    });
  }
}
