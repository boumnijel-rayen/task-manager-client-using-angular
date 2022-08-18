import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInAdminComponent } from './sign-in-admin/sign-in-admin.component';

const routes: Routes = [
  {path:'',component:SignInAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInAdminRoutingModule { }
