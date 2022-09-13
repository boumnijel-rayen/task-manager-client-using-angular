import { Component, OnInit, ViewChild } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserDataServiceService } from 'src/app/views/services/user-data-service.service';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './show-tasks.component.html',
  styleUrls: ['./show-tasks.component.css']
})
export class ShowTasksComponent implements OnInit {

  allchecked = true;
  enCoursChecked = true;
  retardChecked = true;
  finiChecked = true;
  
  @ViewChild('all') all : any;
  @ViewChild('cours') cours : any;
  @ViewChild('retard') retard : any;
  @ViewChild('fini') fini : any;
  
  token = localStorage.getItem('tokenU')
  id = localStorage.getItem('idU')
  user:any
  image:any
  username:any
  Done:any
  late:any
  inProgress:any
  tasks:any = []
  allTasks:Array<any> =[]
  row:Array<any> =[]

  constructor(private userDataService:UserDataServiceService,private route:Router) { }

  ngOnInit(): void {
    this.userDataService.getUser(this.token,this.id).subscribe(response=>{
      this.user = response
      this.username = this.user.username
    })
    this.userDataService.getImageUser(this.token,this.id).subscribe(response=>{
      let reader = new FileReader();
      reader.readAsDataURL(response);
      reader.onload = (e) => {
        this.image = reader.result;
      }
    },error=>{
      this.image = 'assets/img/user.png'
    })
    this.getTasks()
  }

  getTasks(){
    this.userDataService.getDonePerUser(this.token,this.id).subscribe(response=>{
      this.Done = response
    }).add(()=>{
      this.userDataService.getRetardPerUser(this.token,this.id).subscribe(response=>{
        this.late = response
      }).add(()=>{
        this.userDataService.getcoursPerUser(this.token,this.id).subscribe(response=>{
          this.inProgress = response
        }).add(()=>{
          this.Done.forEach((element:any) => {
            element.state = 'Done'
          })
          this.late.forEach((element:any) => {
            element.state = 'Late'
          })
          this.inProgress.forEach((element:any) => {
            const [dateComponents, timeComponents] = element.end.split(' ');
            const [day, month, year] = dateComponents.split('-');
            const [hours, minutes, seconds] = timeComponents.split(':');
            const dateEnd = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);
            
            element.reste = Math.floor((((dateEnd.getTime() - new Date().getTime())/1000)/60)/60) 
            element.state = 'In Progress'
          })
          this.distribution();
        })
      })
    })
  }

  distribution(){
    this.allTasks = []
    this.row = []
    this.tasks = []
    if (this.finiChecked){
      this.tasks = this.tasks.concat(this.Done)
    }
    if(this.enCoursChecked){
      this.tasks = this.tasks.concat(this.inProgress)
    }
    if(this.retardChecked){
      this.tasks = this.tasks.concat(this.late)
    }
    
    this.tasks.sort((a:any,b:any)=>{
      return a.id - b.id
    })

    for (let i = 0; i < this.tasks.length; i++) {
      if (i%3 != 2){
        this.row.push(this.tasks[i])
      }else{
        this.row.push(this.tasks[i])
        this.allTasks.push(this.row)
        this.row = []
      }
    }
    this.allTasks.push(this.row)
  }

  allCheck(){
    if (this.allchecked == false){
      this.allchecked = true;
      console.log(this.allchecked);
      this.cours.nativeElement.checked = true
      this.retard.nativeElement.checked = true
      this.fini.nativeElement.checked = true
      this.enCoursChecked = true;
      this.retardChecked = true;
      this.finiChecked = true;
    }else{
      this.allchecked = false;
      console.log(this.allchecked);
      this.cours.nativeElement.checked = false
      this.retard.nativeElement.checked = false
      this.fini.nativeElement.checked = false
      this.enCoursChecked = false;
      this.retardChecked = false;
      this.finiChecked = false;
    }
    this.distribution()
  }

  enCoursCheck(){
    if (this.enCoursChecked == false){
      this.enCoursChecked = true;
    }else{
      this.enCoursChecked = false;
    }
    this.distribution()
  }

  retardCheck(){
    if (this.retardChecked == false){
      this.retardChecked = true;
    }else{
      this.retardChecked = false;
    }
    this.distribution()
  }

  finiCheck(){
    if (this.finiChecked == false){
      this.finiChecked = true;
    }else{
      this.finiChecked = false;
    }
    this.distribution()
  }

  logout(){
    localStorage.removeItem('tokenU');
    localStorage.removeItem('idU');
    this.route.navigate(['/login']);
  }

  home(){
    this.route.navigate([''])
  }

  assginDone(id:any){
    this.userDataService.assginDone(this.token,id).subscribe().add(()=>{
      this.ngOnInit()
    })
  }

  fakeArray(length: number): any {
    if (length >= 0) {
      return new Array(length);
    }
  }

}
