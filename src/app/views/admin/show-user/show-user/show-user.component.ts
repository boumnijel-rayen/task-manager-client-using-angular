import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  res:any
  constructor(private route:ActivatedRoute) {
    this.route.params.subscribe(data=>{
      this.res = data
      console.log(this.res.id)
    })
  }

  ngOnInit(): void {
  }

}
