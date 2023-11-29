import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Election } from '../models/election';
import { Election_User } from '../models/election_user';
import { Student } from '../models/student';
import { vote } from '../user/vote';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-selection-election-user',
  templateUrl: './selection-election-user.component.html',
  styleUrls: ['./selection-election-user.component.scss'],
})
export class SelectionElectionUserComponent {
  voting: Election[] = [];
  user_id: string | null;
  constructor(private route: Router, private authservice: AuthService) {}

  ngOnInit() {
    this.loadElections();
    console.log(this.user_id, 'aass');
  }
  loadElections() {
    this.user_id = this.authservice.getUser_id();

    forkJoin({
      allElections: this.authservice.getElections(),
      votedElections: this.authservice.getNotVotedYet(this.user_id),
    }).subscribe(({ allElections, votedElections }) => {
      // votedElections.results contendrá la lista de elecciones para las que el usuario ya ha votado.
      console.log(
        allElections,
        '<------AllElections',
        votedElections,
        '<---VotedElections'
      );

      // Filtrar las elecciones disponibles para votar.
      this.voting = allElections.results.filter((vt: Election) => {
        return (
          !vt.finalizated &&
          Array.isArray(votedElections.results) &&
          !votedElections.results.some(
            (e: any) => e.already_vote && e.election_id === vt.id
          )
        );
      });

      console.log(this.voting, 'aaaa');
    });
  }
  seeList(id: number) {
    this.route.navigate(['user', id]);
  }
  exit() {
    this.authservice.removeToken();
    this.route.navigate(['']);
  }
}
