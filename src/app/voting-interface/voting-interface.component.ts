import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js/auto";
 

@Component({
    selector: "app-voting-interface",
    templateUrl: "./voting-interface.component.html",
    styleUrls: ["./voting-interface.component.scss"]

})


export class VotingInterfaceComponent implements OnInit{

    public chart: any;

    ngOnInit(): void {
        this.createChart();
    }

    createChart(){

        this.chart = new Chart("MyChart", {
          type: 'doughnut', //this denotes tha type of chart
    
          data: {// values on X-Axis
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
      
}