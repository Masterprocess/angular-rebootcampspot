import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { VideoCenterComponent } from "./video-center/video-center.component";
import { LoginComponent } from "./login/login.component";
import { AdminCenterComponent } from "./admin-center/admin-center.component";
import { StudentCenterComponent } from "./student-center/student-center.component";
import { TeacherCenterComponent } from "./teacher-center/teacher-center.component";
import { UserRedirectComponent } from "./user-redirect/user-redirect.component";


const routes: Routes = [
	{path: '', redirectTo:'/login', pathMatch:'full'},
	{path: 'login', component: LoginComponent},
	{path: 'admin', component: AdminCenterComponent},
	{path: 'classcenter', component: StudentCenterComponent},
	{path: 'teachercenter', component: TeacherCenterComponent},
	{path: 'redirect', component: UserRedirectComponent},
  {path: 'home', component: HomeComponent},
  {path: 'videos', component: VideoCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
