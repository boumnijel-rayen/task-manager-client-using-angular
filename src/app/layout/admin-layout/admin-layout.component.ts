import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) {
    this.router.navigate(['admin/dashboard']);
  }

  ngOnInit(): void {
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

}
