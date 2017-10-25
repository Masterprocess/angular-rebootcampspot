import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { StudentCenterComponent } from './student-center/student-center.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
	{path: '', redirectTo:'/login', pathMatch:'full'},
	{path: 'login', component: LoginComponent},
	{path: 'admin', component: AdminCenterComponent},
	{path: 'student', component: StudentCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
