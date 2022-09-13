import { AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminDataService } from 'src/app/views/services/admin-data.service';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  @ViewChild('dashboard') dashboard:any;
  @ViewChild('users') users:any;
  @ViewChild('tasks') tasks:any;
  @ViewChild('ctask') ctask:any;
  username:any
  data:any
  url:any
  token:any = localStorage.getItem('token')
  id:any = localStorage.getItem('id')

  constructor(private router:Router,private authadminService: AuthadminService,private adminDataService:AdminDataService) {
    if (router.url === '/admin') {
      this.router.navigate(['admin/dashboard']);
    }
    
  }

  ngOnInit(): void {
    this.adminDataService.getUser(this.token,this.id).subscribe((response: any)=>{
      this.data = response;
      this.username = this.data.username
    })
    this.adminDataService.getImage(this.token,this.id).subscribe(response=>{
      let reader = new FileReader();
      reader.readAsDataURL(response);
      reader.onload = (e) => {
        this.url = reader.result;
      }
    },error=>{
      this.url = 'assets/img/user.png'
    })
  }

  changeDColor(){
    this.dashboard.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.dashboard.nativeElement.style.color = 'white';
    this.users.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.users.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.tasks.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.tasks.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.ctask.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.ctask.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  changeUColor(){
    this.users.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.users.nativeElement.style.color = 'white';
    this.dashboard.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.dashboard.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.tasks.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.tasks.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.ctask.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.ctask.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  changeTColor(){
    this.tasks.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.tasks.nativeElement.style.color = 'white';
    this.users.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.users.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.dashboard.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.dashboard.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.ctask.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.ctask.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  changeCColor(){
    this.ctask.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.ctask.nativeElement.style.color = 'white';
    this.users.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.users.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.tasks.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.tasks.nativeElement.style.color = 'rgb(13, 37, 255)';
    this.dashboard.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.dashboard.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    this.router.navigate(['/loginAdmin']);
  }

  home(){
    this.router.navigate(['']);
  }

}
