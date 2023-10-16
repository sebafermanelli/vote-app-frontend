import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Chart } from "chart.js/auto";
 

@Component({
    selector: "app-voting-interface",
    templateUrl: "./voting-interface.component.html",
    styleUrls: ["./voting-interface.component.scss"]

})


export class VotingInterfaceComponent implements OnInit{

    public chart: any;
    constructor(private route:Router){}

    ngOnInit(): void {
        this.createChart();
    }

    createChart(){

        this.chart = new Chart("MyChart", {
          type: 'doughnut', 
    
          data: {
            labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
               datasets: [{
        label: 'My First Dataset',
        data: [600, 240, 100, 432, 253, 34],
        backgroundColor: [
          'red',
          'pink',
          'green',
          'yellow',
          'orange',
          'blue',			
        ],
        hoverOffset: 4
      }],
          },
          options: {
            aspectRatio:0
          }
    
        });
      }
      exit(){
        this.route.navigate(['admin'])
      }
}