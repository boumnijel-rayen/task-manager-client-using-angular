import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInUserRoutingModule } from './sign-in-user-routing.module';
import { SignInUserComponent } from './sign-in-user/sign-in-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignInUserComponent
  ],
  imports: [
    CommonModule,
    SignInUserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SignInUserModule { }
