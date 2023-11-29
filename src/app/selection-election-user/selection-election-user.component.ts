import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Election } from '../models/election';
import { BrowserStorageService } from '../storage.service';

@Component({
  selector: 'app-selection-election-user',
  templateUrl: './selection-election-user.component.html',
  styleUrls: ['./selection-election-user.component.scss'],
})
export class SelectionElectionUserComponent {
  voting: Election[] = [];
  user_id: string | null;
  constructor(
    private route: Router,
    private authservice: AuthService,
    private ls: BrowserStorageService
  ) {}

  ngOnInit() {
    this.loadElections();
  }
  loadElections() {
    this.authservice.getElections().subscribe((response) => {
      this.voting = response.results.filter((vt: Election) => !vt.finalizated);
    });
  }

  seeList(id: number) {
    this.route.navigate(['user', id]);
  }
  exit() {
    this.ls.clear;
    this.route.navigate(['']);
  }
}
