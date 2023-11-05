import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Chart } from "chart.js/auto";
import { AuthService } from "../auth.service";
 

@Component({
    selector: "app-voting-interface",
    templateUrl: "./voting-interface.component.html",
    styleUrls: ["./voting-interface.component.scss"]
    

})


export class VotingInterfaceComponent implements OnInit{

 
    public chart: any;
    constructor(private route:Router , private AuthService: AuthService, ){
      }

    ngOnInit(): void {
        //this.datos();
        this.createChart();
    }

    /*datos(){
      this.data = this.AuthService.getElections();
      console.log(this.data)
      console.log(this.AuthService.getElections())
    }*/

    createChart(){

        this.chart = new Chart("MyChart", {
          type: 'doughnut', 
    
          data: {
            labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
               datasets: [{
        label: 'Cantidad de votos',
        data: [600, 50, 100, 432, 253, 34],
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