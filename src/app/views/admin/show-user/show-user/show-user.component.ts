import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminDataService } from 'src/app/views/services/admin-data.service';
import { UserDataServiceService } from 'src/app/views/services/user-data-service.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  res:any
  token:any = localStorage.getItem('token')
  user:any
  image:any
  done:any
  retard:any
  cours:any
  constructor(private route:ActivatedRoute,private AdminDataService:AdminDataService,private UserDataservice:UserDataServiceService) {
    this.route.params.subscribe(data=>{
      this.res = data
      console.log(this.res.id)
    })
  }

  ngOnInit(): void {
    this.AdminDataService.getUser(this.token,this.res.id).subscribe(data=>{
      this.user = data
    })
    this.AdminDataService.getImage(this.token,this.res.id).subscribe(response=>{
      let reader = new FileReader();
      reader.readAsDataURL(response);
      reader.onload = (_event) => {
        this.image = reader.result;
      }
    },error=>{
      this.image = "assets/img/user.png"
    })
    this.UserDataservice.getDonePerUser(this.token,this.res.id).subscribe(data=>{
      this.done = data
    })
    this.UserDataservice.getRetardPerUser(this.token,this.res.id).subscribe(data=>{
      this.retard = data
    })
    this.UserDataservice.getcoursPerUser(this.token,this.res.id).subscribe(data=>{
      this.cours = data
    })
    }

}
