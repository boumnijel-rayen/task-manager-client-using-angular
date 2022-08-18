import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInUserComponent } from './sign-in-user/sign-in-user.component';

const routes: Routes = [
  {path:'',component:SignInUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInUserRoutingModule { }
