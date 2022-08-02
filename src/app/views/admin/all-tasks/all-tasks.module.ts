import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllTasksRoutingModule } from './all-tasks-routing.module';
import { AllTasksComponent } from './all-tasks/all-tasks.component';


@NgModule({
  declarations: [
    AllTasksComponent
  ],
  imports: [
    CommonModule,
    AllTasksRoutingModule
  ]
})
export class AllTasksModule { }
