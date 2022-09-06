import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';

@Component({
  selector: 'app-sign-in-admin',
  templateUrl: './sign-in-admin.component.html',
  styleUrls: ['./sign-in-admin.component.css']
})
export class SignInAdminComponent implements OnInit {

  MyForm:any
  invalid:boolean = false;
  data:any;
  constructor(private formBuilder : FormBuilder, private router: Router,private authadminService: AuthadminService) {
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
    this.authadminService.signIn(this.MyForm.value.username,this.MyForm.value.password).subscribe(
      data => {
        this.data = data;
        this.invalid = this.authadminService.saveData(this.data.token);
      },
      error => {
        console.log(error)
        this.invalid = true;
      }
    )
  }
}
