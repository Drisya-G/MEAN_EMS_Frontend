import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
{
  path: 'login' ,component:LoginComponent       //1st shown login page      
},
{
  path:'dashboard', component:DashboardComponent
},
{
  path:'employeeAdd',component:EmployeeAddComponent
},
{
  path:'employee', component:EmployeeComponent
},
{
  path:'register',component:RegisterComponent
},
{
  path:'aboutus', component:AboutusComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
