import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './models/student';
import { Election } from './models/election';
import { Candidate } from './models/candidate';
import { List } from './models/list';
import { BrowserStorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'http://localhost:3000/api';

  private createAuthorizationHeader() {
    const token = this.ls.getToken();
    return { Authorization: `Bearer ${token}` };
  }

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
    return this.http.post(`${this.URL}/elections/`, election, {
      headers: this.createAuthorizationHeader(),

    });
  }

  loadList(list: List) {
    return this.http.post(`${this.URL}/lists/`, list, {
      headers: this.createAuthorizationHeader(),
    });
  }

  loadDelegation(electionId: string) {
    const body = {
      electionId: electionId,
    };
    return this.http.post(`${this.URL}/delegations`, body, { headers: this.createAuthorizationHeader() });
  }

  loadStudent(student: Student) {
    return this.http.post(`${this.URL}/users/`, student, { headers: this.createAuthorizationHeader() });
  }

  loadListRoles(
    order: number,
    listId: string,
    roleId: string,
    candidateId: string
  ) {
    const body = {
      order,
      listId,
      roleId,
      candidateId,
    };
    return this.http.post<any>(`${this.URL}/listroles`, body, {
      headers: this.createAuthorizationHeader(),
    });
  }

  loadCandidates(candidate: Candidate) {
    return this.http.post<any>(`${this.URL}/candidates`, candidate, {
      headers: this.createAuthorizationHeader(),
    });
  }

  loadElectionUser(id: string) {
    const body = {};
    return this.http.post(`${this.URL}/electionusers/${id}/generate`, body, {
      headers: this.createAuthorizationHeader(),
    });
  }
  loadVote(vote: any) {
    const body = vote;
    return this.http.put(
      `${this.URL}/electionusers/${this.ls.getUserId()}/vote`,body,{ headers: this.createAuthorizationHeader() }
    );
  }
  getAdmin() {
    return this.http.get(`${this.URL}/admin`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getStudent(): Observable<Student[]> {
  return this.http.get<Student[]>(`${this.URL}/users`, { headers: this.createAuthorizationHeader() });
  }
  getOneStudent(id: string) {
    return this.http.get<any>(`${this.URL}/users/${id}`, {
          headers: this.createAuthorizationHeader(),
         });}

  getOneList(id: string) {
    return this.http.get<any>(`${this.URL}/lists/${id}`, { headers: this.createAuthorizationHeader() });
  }
  getOneElection(id: string) {
    return this.http.get<any>(`${this.URL}/elections/${id}`, {
      headers: this.createAuthorizationHeader(),
    });
  }
  getNotVotedYet(userId: string) {
    return this.http.get<any>(
      `${this.URL}/electionusers/${userId}/notvotedyet`,
      { headers: this.createAuthorizationHeader() }
    );
  }

  getElections() {
    return this.http.get<any>(`${this.URL}/elections`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getListbyElection(id: string) {
    return this.http.get<any>(`${this.URL}/elections/${id}/lists`, {
      headers: this.createAuthorizationHeader(),
    });
  }
  getElectionByStudent(id: string) {
    return this.http.get<any>(`${this.URL}/electionusers/${id}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getList() {
    return this.http.get<any>(`${this.URL}/lists`, { headers: this.createAuthorizationHeader() });
  }

  getElectionDelegation(id: string) {
    return this.http.get<any>(`${this.URL}/elections/${id}/delegation`, {
      headers: this.createAuthorizationHeader(),
    });
  }
  getCode(){
    return this.ls.getCode();
  }

  finalizated(id: string) {
    return this.http.put(
      `${this.URL}/elections/${id}/finalize`,{},{ headers: this.createAuthorizationHeader() }
    );
  }
  deleteStudents(id: string | null) {
    return this.http.delete<any>(`${this.URL}/users/${id}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  deleteList(id: string | null) {
    return this.http.delete<any>(`${this.URL}/lists/${id}`, {
      headers: this.createAuthorizationHeader(),
    });
  }

  deleteElections(id: string | null) {
    return this.http.delete<any>(`${this.URL}/elections/${id}`, {
      headers: this.createAuthorizationHeader(),
    });
  }
}
