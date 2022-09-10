import { Component, OnInit } from '@angular/core';
import { AdminDataService } from 'src/app/views/services/admin-data.service';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit {

  tasks:any;
  token:any = localStorage.getItem('token')
  constructor(private AdminDataService:AdminDataService) { }

  ngOnInit(): void {
    this.AdminDataService.getAllTasks(this.token).subscribe(response=>{
      this.tasks = response
    }).add(()=>{
      this.setState()
    })
  }

  setState(){
    this.tasks.forEach((task:any) => {
      if (task.done) {
        task.state = "Done"
      }else{
        const [dateComponents, timeComponents] = task.end.split(' ');

        const [month, day, year] = dateComponents.split('-');
        const [hours, minutes, seconds] = timeComponents.split(':');

        const dateEnd = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);

        if((!task.done) && (dateEnd < new Date())){
          task.state = "Late"
        }else{
          if((!task.done) && (dateEnd > new Date())){
            task.state = "In Progress"
          }
        }
      }
    })
  }

  supprimer(id:any){
    this.AdminDataService.deleteTask(this.token,id).subscribe().add(()=>{
      this.ngOnInit()
    })
  }

}
