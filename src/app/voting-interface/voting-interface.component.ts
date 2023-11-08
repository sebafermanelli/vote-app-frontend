import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-voting-interface',
  templateUrl: './voting-interface.component.html',
  styleUrls: ['./voting-interface.component.scss'],
})
export class VotingInterfaceComponent implements OnInit {
  public chart: any;
  id_list: string;
  id: string;
  delegation: any = [];
  lists: any = [];
  completeName1 = '';
  completeName2 = '';
  completeName3 = '';
  descriptionList = '';
  electionName = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
      this.authService.getElectionDelegation(this.id).subscribe((response) => {
        this.delegation = response.results;
        this.getListCharts();
        this.authService
          .getOneStudent(this.delegation.rol1_id)
          .subscribe((userData) => {
            this.completeName1 =
              userData.results.name + ' ' + userData.results.last_name;
          });
        this.authService
          .getOneStudent(this.delegation.rol2_id)
          .subscribe((userData) => {
            this.completeName2 =
              userData.results.name + ' ' + userData.results.last_name;
          });
        this.authService
          .getOneStudent(this.delegation.rol3_id)
          .subscribe((userData) => {
            this.completeName3 =
              userData.results.name + ' ' + userData.results.last_name;
          });
        this.authService.getOneElection(this.id).subscribe((userData) => {
          this.electionName = userData.results.description;
        });
      });
    });
  }

  getListCharts() {
    this.authService.getListbyElection(this.id).subscribe((response) => {
      this.lists = response.results;
      const listWithMaxVotes: any = this.lists.reduce(
        (maxList: any, currentList: any) => {
          return currentList.votes > maxList.votes ? currentList : maxList;
        },
        this.lists[0]
      );
      if (listWithMaxVotes) {
        this.id_list = listWithMaxVotes.id;
        this.authService.getOneList(this.id_list).subscribe((userData) => {
          this.descriptionList = userData.results.description;
        });
      }
      this.createChart();
    });
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'doughnut',
      data: {
        labels: this.lists.map((list: any) => list.description),
        datasets: [
          {
            label: 'Cantidad de Votos',
            data: this.lists.map((list: any) => list.votes),
            backgroundColor: [
              'red',
              'green',
              'white',
              'black',
              'orange',
              'blue',
              'black',
              'white',
              'purple',
              'prink',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 1,
      },
    });
  }
  exit() {
    this.router.navigate(['admin']);
  }
}
