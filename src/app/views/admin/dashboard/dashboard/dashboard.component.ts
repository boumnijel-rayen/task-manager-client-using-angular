import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart : any = []
  constructor() {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.chart = new Chart('canvas',{
      type: 'line',
      data: {
        labels: ['03/08', '04/08', '05/08', '06/08', '07/08', '08/08', '09/08'],
        datasets: [{
            label: 'Tasks Done',
            data: [1, 11, 32, 5, 8, 3, 10],
            borderWidth: 1,
            fill:true,
            backgroundColor(ctx, options) {
              let gradient = ctx.chart.ctx.createLinearGradient(0,0,0,400)
              gradient.addColorStop(0,"#5a2ff5")
              gradient.addColorStop(1,"#58e6ff")
              return gradient
            },
        }]
    },
    options: {
      responsive:true,
      scales: {
          y: {
              beginAtZero: true
          }
      }
    }
    })
  }

}
