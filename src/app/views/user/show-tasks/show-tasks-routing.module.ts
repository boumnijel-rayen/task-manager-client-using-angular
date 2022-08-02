import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowTasksComponent } from './show-tasks/show-tasks.component';

const routes: Routes = [
  {path:'',component:ShowTasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowTasksRoutingModule { }
