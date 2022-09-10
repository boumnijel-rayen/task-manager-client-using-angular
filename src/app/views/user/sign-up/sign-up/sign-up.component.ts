import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataServiceService } from 'src/app/views/services/user-data-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  myForm: any;

  @ViewChild('upload') upload:any;
  @ViewChild('file')  file:any;

  usernameExiste:boolean = false;

  constructor(private formBuilder : FormBuilder, private router:Router,private userDataService:UserDataServiceService) {
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
    this.userDataService.isExiste(this.myForm.value.username).subscribe(response=>{
      if(response){
        this.usernameExiste = true;
      }else{
        this.usernameExiste = false;
      }
    }).add(()=>{
      if(!this.usernameExiste){
        const formData = new FormData();
        formData.append('image', this.file.nativeElement.files[0], this.file.nativeElement.files[0].name);
        formData.append('name', this.myForm.value.name);
        formData.append('email', this.myForm.value.email);
        formData.append('username', this.myForm.value.username);
        formData.append('password', this.myForm.value.password);

        this.userDataService.addUser(formData).subscribe(response=>{
          this.router.navigate(['/login']);
        })
        
      }
    })
    
  }

}
