import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowTasksRoutingModule } from './show-tasks-routing.module';
import { ShowTasksComponent } from './show-tasks/show-tasks.component';


@NgModule({
  declarations: [
    ShowTasksComponent
  ],
  imports: [
    CommonModule,
    ShowTasksRoutingModule
  ]
})
export class ShowTasksModule { }
