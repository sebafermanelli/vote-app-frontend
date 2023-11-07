import { Component, OnInit } from "@angular/core";
import { Router,ActivatedRoute } from "@angular/router";
import { Chart } from "chart.js/auto";
import { AuthService } from "../auth.service";


@Component({
    selector: "app-voting-interface",
    templateUrl: "./voting-interface.component.html",
    styleUrls: ["./voting-interface.component.scss"]
})
export class VotingInterfaceComponent implements OnInit {
    public chart: any;
    id:string;
    delegation:any=[]

    constructor(private router: Router, private authService: AuthService,private activatedRoute: ActivatedRoute,) {}

    ngOnInit(): void {
        this.createChart();
        this.activatedRoute.paramMap.subscribe((params)=>{
        this.id=params.get('id')||'';
        console.log(this.id);
        this.authService.getElectionDelegation(this.id).subscribe((response)=>{
            this.delegation=response.results;
            console.log(response)
        });});
    }

    createChart() {
        this.chart = new Chart("MyChart", {
            type: 'doughnut',
            data: {
                labels: ['Red', 'Pink', 'Green', 'Yellow', 'Orange', 'Blue','Juan',''],
                datasets: [{
                    label: 'Cantidad de votos',
                    data: [600, 50, 100, 432, 253, 34,8000],
                    backgroundColor: [
                        'red',
                        'pink',
                        'green',
                        'yellow',
                        'orange',
                        'blue',
                        'black',
                        'white',
                    ],
                    hoverOffset: 4
                }],
            },
            options: {
                aspectRatio: 1, 
            }
        });
    }


    exit() {
        this.router.navigate(['admin']);
    }
}