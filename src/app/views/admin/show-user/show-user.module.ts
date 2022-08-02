import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowUserRoutingModule } from './show-user-routing.module';
import { ShowUserComponent } from './show-user/show-user.component';


@NgModule({
  declarations: [
    ShowUserComponent
  ],
  imports: [
    CommonModule,
    ShowUserRoutingModule
  ]
})
export class ShowUserModule { }
