import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTasksComponent } from './all-tasks/all-tasks.component';

const routes: Routes = [
  {path:'',component:AllTasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllTasksRoutingModule { }
