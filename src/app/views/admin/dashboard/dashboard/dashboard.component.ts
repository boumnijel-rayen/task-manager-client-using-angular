import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { AdminDataService } from 'src/app/views/services/admin-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart : any = []
  tasksToday:any
  tasksDone:any
  tasksLate:any 
  tableResponse:any
  constructor(private adminDataService:AdminDataService) {
    Chart.register(...registerables)
  }

  ngOnInit(): void {
    this.adminDataService.getTasksToday().subscribe(response => {
      this.tasksToday = response
    })
    this.adminDataService.getTasksDone().subscribe(response => {
      this.tasksDone = response
    })
    this.adminDataService.getTasksLate().subscribe(response => {
      this.tasksLate = response
    })
    this.adminDataService.getChartInfos().subscribe(response => {
      this.tableResponse = response
      this.chart = new Chart('canvas',{
        type: 'line',
        data: {
          labels: [this.tableResponse[7].date,this.tableResponse[6].date,this.tableResponse[5].date,this.tableResponse[4].date,this.tableResponse[3].date,this.tableResponse[2].date,this.tableResponse[1].date,this.tableResponse[0].date],
          datasets: [{
              label: 'Tasks Done',
              data: [this.tableResponse[7].numberOfTasks,this.tableResponse[6].numberOfTasks,this.tableResponse[5].numberOfTasks,this.tableResponse[4].numberOfTasks,this.tableResponse[3].numberOfTasks,this.tableResponse[2].numberOfTasks,this.tableResponse[1].numberOfTasks,this.tableResponse[0].numberOfTasks],
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
    })
    
  }


}
