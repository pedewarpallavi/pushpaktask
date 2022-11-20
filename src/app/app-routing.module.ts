import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path:'', redirectTo:'signin', pathMatch:'full'},
{path: 'signin', component:SigninComponent},
{path:'forgotpassword', component:ForgotpasswordComponent},
{path:'signup' , component:SignupComponent},
{path:'dashboard' , component:DashboardComponent},
{path:'**' , component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
