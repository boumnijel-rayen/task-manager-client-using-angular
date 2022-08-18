import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToSignInUser(){
    this.router.navigate(['/login']);
  }

  goToSignInAdmin(){
    this.router.navigate(['/loginAdmin']);
  }

  goToSignUp(){
    this.router.navigate(['/user/signup']);
  }

}
