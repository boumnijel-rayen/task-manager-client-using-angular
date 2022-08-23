import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/views/services/auth-user.service';

@Component({
  selector: 'app-sign-in-user',
  templateUrl: './sign-in-user.component.html',
  styleUrls: ['./sign-in-user.component.css']
})
export class SignInUserComponent implements OnInit {

  MyForm:any
  invalid:boolean = false;
  data:any;
  constructor(private formBuilder:FormBuilder, private router:Router,private authUserService:AuthUserService) {
    this.MyForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['']);
  }

  connect(){
    this.authUserService.signIn(this.MyForm.value.username,this.MyForm.value.password).subscribe(
      data => {
        this.data = data;
        this.invalid = this.authUserService.saveData(this.data.token);
      },
      error => {
        console.log(error)
        this.invalid = true;
      }
    )
  }

}
