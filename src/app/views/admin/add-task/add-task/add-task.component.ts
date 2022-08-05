import { Component, OnInit } from '@angular/core';
import { AbstractControl, CheckboxRequiredValidator, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {


  Myform: any;
  currentDate :boolean=false;
  initialValueUsername = "Choisissez l'utilisateur";
  constructor(private formBuilder : FormBuilder) {
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
  }

  onChange($event: any){
    this.currentDate = $event.target.checked;
    if(this.currentDate){
      this.Myform.controls.dateD.setValue('');
    }else{
      this.Myform.controls.dateD.setValue(null);
    }
    
  }

  add(){
    const task={
      titre: this.Myform.value.titre,
      description: this.Myform.value.description,
      dateD: this.Myform.value.dateD,
      dateF: this.Myform.value.dateF,
      username: this.Myform.value.username
    }
    if(this.currentDate){
      let date = new Date();
      task.dateD = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDay()+"T"+date.getHours()+":"+date.getMinutes();
    }
    console.log(task);
  }

}
