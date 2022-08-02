import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  {path:'',component:AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTaskRoutingModule { }
