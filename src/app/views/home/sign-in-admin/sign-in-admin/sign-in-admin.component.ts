import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-admin',
  templateUrl: './sign-in-admin.component.html',
  styleUrls: ['./sign-in-admin.component.css']
})
export class SignInAdminComponent implements OnInit {

  MyForm:any
  invalid:boolean = false;

  constructor(private formBuilder : FormBuilder, private router: Router) {
    this.MyForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate([''])
  }


  connect(){

  }
}
