import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { GuardAdminGuard } from './views/guards/guard-admin.guard';
import { GuardLoginAdminGuard } from './views/guards/guard-login-admin.guard';

const routes: Routes = [
  {path:'',component:HomeLayoutComponent,children:[
    {path:'',loadChildren:()=>import('./views/home/home-page/home-page.module').then(m=>m.HomePageModule)},
    {path:'loginAdmin',canActivate:[GuardLoginAdminGuard],loadChildren:()=>import('./views/home/sign-in-admin/sign-in-admin.module').then(m=>m.SignInAdminModule)},
    {path:'login',loadChildren:()=>import('./views/home/sign-in-user/sign-in-user.module').then(m=>m.SignInUserModule)}
  ]},
  {path:'admin',component:AdminLayoutComponent, canActivate:[GuardAdminGuard],children:[
    {path:'addtask',loadChildren:()=>import('./views/admin/add-task/add-task.module').then(m=>m.AddTaskModule)},
    {path:'alltasks',loadChildren:()=>import('./views/admin/all-tasks/all-tasks.module').then(m=>m.AllTasksModule)},
    {path:'allusers',loadChildren:()=>import('./views/admin/all-users/all-users.module').then(m=>m.AllUsersModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'showuser',loadChildren:()=>import('./views/admin/show-user/show-user.module').then(m=>m.ShowUserModule)}
  ]},
  {path:'user',component:UserLayoutComponent,children:[
    {path:'showtasks',loadChildren:()=>import('./views/user/show-tasks/show-tasks.module').then(m=>m.ShowTasksModule)},
    {path:'signup',loadChildren:()=>import('./views/user/sign-up/sign-up.module').then(m=>m.SignUpModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
