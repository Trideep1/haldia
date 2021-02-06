import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [
  {path:'', component:LandingPageComponent},
  {path:'signup', loadChildren:() => SignUpModule},
  {path:'dashboard', loadChildren:() =>DashboardModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
