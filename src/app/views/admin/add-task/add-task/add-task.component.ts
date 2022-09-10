import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, CheckboxRequiredValidator, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AdminDataService } from 'src/app/views/services/admin-data.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {


  @ViewChild('today') today: any;
  Myform: any;
  currentDate :boolean=false;
  initialValueUsername = "Choisissez l'utilisateur";
  token = localStorage.getItem('token');
  id:any
  users:any
  task:any
  success:boolean=false
  constructor(private formBuilder : FormBuilder,private adminDataService: AdminDataService) {
    this.Myform = formBuilder.group({
      titre: ['', Validators.required],
      description: ['', [Validators.required,Validators.minLength(10)]],
      dateD: [],
      dateF: ['',Validators.required],
      username: ["Choisissez l'utilisateur"]
    },{
      validators: [this.controlUsername("username"),this.controlDate("dateD")]
    });
  }

  private controlDate(controlDate : string):ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null => {
      const FormGroup = control as FormGroup;
      const dateD = FormGroup.get(controlDate)?.value;
      
      if((!this.currentDate) && (dateD == null)){
        return {
          dateNotValid: true
        }
      }else{
        return null;     
      }

    }
  }

  private controlUsername(controlUsername : string):ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null => {
      const FormGroup = control as FormGroup;
      const username = FormGroup.get(controlUsername)?.value;

      if(username != this.initialValueUsername){
        return null;
      }else{
        return {
          usernameNotValid: true
        }
      }
    }
  }

  ngOnInit(): void {
    this.adminDataService.getAllUsers(this.token).subscribe(response=>{
      this.users = response;
    })
  }

  onChange($event: any){
    this.currentDate = $event.target.checked;
    if(this.currentDate){
      this.Myform.controls.dateD.setValue('');
    }else{
      this.Myform.controls.dateD.setValue(null);
    }
    
  }

  towDigits(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

  add(){
    let start = new Date(this.Myform.value.dateD);
    let end = new Date(this.Myform.value.dateF);
    
    let task={
      title: this.Myform.value.titre,
      description: this.Myform.value.description,
      start: this.towDigits(start.getDate())+"-"+this.towDigits(start.getMonth()+1)+"-"+start.getFullYear()+" "+this.towDigits(start.getHours())+":"+this.towDigits(start.getMinutes())+":"+this.towDigits(start.getSeconds()),
      end: this.towDigits(end.getDate())+"-"+this.towDigits(end.getMonth()+1)+"-"+end.getFullYear()+" "+this.towDigits(end.getHours())+":"+this.towDigits(end.getMinutes())+":"+this.towDigits(end.getSeconds()),
    }
    if(this.currentDate){
      let date = new Date();
      task.start = this.towDigits(date.getDate())+"-"+this.towDigits(date.getMonth()+1)+"-"+date.getFullYear()+" "+this.towDigits(date.getHours())+":"+this.towDigits(date.getMinutes())+":"+this.towDigits(date.getSeconds());
    }

    this.adminDataService.addTask(this.token,task).subscribe(response=>{
      this.task = response
    }).add(()=>{
      this.adminDataService.getID(this.token,this.Myform.value.username).subscribe(response=>{
        this.id = response;
      }).add(()=>{
        this.adminDataService.assignTaskToUser(this.token,this.task.id,this.id).subscribe()
        this.success = true;
        this.today.nativeElement.checked = false;
        this.Myform.reset();
      })
    })
  }

}
