import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDataService } from 'src/app/views/services/admin-data.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users:any = []
  token:any = localStorage.getItem('token')
  data:any
  constructor(private adminDataService:AdminDataService, private route:Router){
    
  }

  ngOnInit(): void {
    this.adminDataService.getAllUsers(this.token).subscribe(response=>{
      this.users = response;
    }).add(()=>{

      this.users.forEach((element:any) => {

        this.adminDataService.getImage(this.token,element.id).subscribe(response=>{
          let reader = new FileReader();
          reader.readAsDataURL(response);
          reader.onload = (e) => {
            element.image = reader.result;
          }
        },error=>{
          element.image = 'assets/img/user.png'
        })

        this.adminDataService.getNbTasksPerUser(this.token,element.id).subscribe(response=>{
          element.nbTasks = response;
        })

        
      });

    })
  }


  supprimer(id:any){
    this.adminDataService.deleteUser(this.token,id).subscribe().add(()=>{
      this.ngOnInit()
    })
  }

  userDetails(id:any){
    this.route.navigate(['/admin/showuser/',id])
  }


}
