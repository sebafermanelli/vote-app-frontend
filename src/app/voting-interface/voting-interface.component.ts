import { Component, OnInit } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { Chart } from "chart.js/auto";
import { AuthService } from "../auth.service";
import { response } from "express";


@Component({
    selector: "app-voting-interface",
    templateUrl: "./voting-interface.component.html",
    styleUrls: ["./voting-interface.component.scss"]
})
export class VotingInterfaceComponent implements OnInit {
    public chart: any;
    id:string;
    delegation:any=[];
    lists: any = [];

    constructor(private router: Router, private authService: AuthService,private activatedRoute: ActivatedRoute,) {}

    ngOnInit(): void {
        
        this.activatedRoute.paramMap.subscribe((params)=>{
        this.id=params.get('id')||'';
        console.log(this.id);

        this.authService.getListbyElection(this.id).subscribe((response)=>{
            this.lists = response.results
            console.log('list',this.lists)    
        })
        this.authService.getElectionDelegation(this.id).subscribe((response)=>{
            this.delegation=response.results;
            this.createChart();
        });});
        
    }
    

    createChart() {
        console.log('222', this.lists  )
        this.chart = new Chart("MyChart", {
            type: 'doughnut',
            data: {
                labels: this.lists.map((list:any) => list.description),
                datasets: [{
                    label: 'Cantidad de votos',
                    data: this.lists.map((list:any) => list.votes),
                    backgroundColor: [
                        'red',
                        'grey',
                        'green',
                        'yellow',
                        'orange',
                        'blue',
                        'black',
                        'white',
                        'purple',
                        'prink'
                    ],
                    hoverOffset: 4
                }],
            },
            options: {
                aspectRatio: 1, 
            }
        });
    }

  /*   getLists(){
        this.authService.getListbyElection(this.id).subscribe((response)=>{
            this.lists = response.results
            console.log('list',this.lists)
            return this.lists
            
        })
    }
 */


    exit() {
        this.router.navigate(['admin']);
    }
}