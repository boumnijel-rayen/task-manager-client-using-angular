import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  myForm: any;

  @ViewChild('upload') upload:any;

  constructor(private formBuilder : FormBuilder, private router:Router) {
    this.myForm = formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['',  [Validators.email,Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
      image: ['', Validators.required]
    },{
      validators: [this.controlPasswordConfirmation("password", "confirmPassword"), this.controlPassword("password")]
    });
  }


  private controlPassword(controlPassword : string):ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null => {
      const FormGroup = control as FormGroup;
      const password = FormGroup.get(controlPassword)?.value;
      let test : boolean = true;
      var regExpLower = /[a-z]/g;
      var regExpUpper = /[A-Z]/g;
      var regExpNumber = /[0-9]/g;
      var regExpSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

      if (!regExpLower.test(password)) {
        test = false;
      }
      if(!regExpUpper.test(password)){
        test = false;
      }
      if(!regExpNumber.test(password)){
        test = false;
      }
      if(!regExpSpecial.test(password)){
        test = false;
      }
      if((password.length < 8) || (password.length > 32)){
        test = false;
      }

      if(!test){
        return {
          passworControlNotValid: true
        }
      }else{
        return null;     
      }

    }
  }

  private controlPasswordConfirmation(controlPassword : string, controlConfirmation : string):ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null => {
      const FormGroup = control as FormGroup;
      const password = FormGroup.get(controlPassword)?.value;
      const confirmation = FormGroup.get(controlConfirmation)?.value;
      
      if(password != confirmation){
        return {
          passworConfirmationControlNotValid: true
        }
      }else{
        return null;     
      }

    }
  }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['']);
  }

  fill(){
    this.upload.nativeElement.style.backgroundColor = "#71b7e6";
    this.upload.nativeElement.style.borderColor = "#fff";
    this.upload.nativeElement.style.color = "#fff";
  }

  add(){
    console.log(this.myForm.value);
  }

}
