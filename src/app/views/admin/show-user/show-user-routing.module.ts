import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowUserComponent } from './show-user/show-user.component';

const routes: Routes = [
  {path:'',component:ShowUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowUserRoutingModule { }
