import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInAdminRoutingModule } from './sign-in-admin-routing.module';
import { SignInAdminComponent } from './sign-in-admin/sign-in-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignInAdminComponent
  ],
  imports: [
    CommonModule,
    SignInAdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SignInAdminModule { }
