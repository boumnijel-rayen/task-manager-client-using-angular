import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    HomeLayoutComponent,
    UserLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
