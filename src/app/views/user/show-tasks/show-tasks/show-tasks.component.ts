import { Component, OnInit, ViewChild } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
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
  }

  enCoursCheck(){
    if (this.enCoursChecked == false){
      this.enCoursChecked = true;
    }else{
      this.enCoursChecked = false;
    }
  }

  retardCheck(){
    if (this.retardChecked == false){
      this.retardChecked = true;
    }else{
      this.retardChecked = false;
    }
  }

  finiCheck(){
    if (this.finiChecked == false){
      this.finiChecked = true;
    }else{
      this.finiChecked = false;
    }
  }

}
