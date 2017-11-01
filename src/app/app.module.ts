import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'angular2-materialize';
import { MatSidenavModule, MatButtonModule, MatCheckboxModule, MatProgressBarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SafePipe } from './safe.pipe';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { StudentCenterComponent } from './student-center/student-center.component';
import { TeacherCenterComponent } from './teacher-center/teacher-center.component';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UserRedirectComponent } from './user-redirect/user-redirect.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { CohortCreateComponent } from './cohort-create/cohort-create.component';
import { LessonCreateComponent } from './lesson-create/lesson-create.component';
import { HomeworkCreateComponent } from './homework-create/homework-create.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { CohortDetailComponent } from './cohort-detail/cohort-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeworkDetailComponent } from './homework-detail/homework-detail.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { CohortListComponent } from './cohort-list/cohort-list.component';
import { MainFooterComponent } from './main-footer/main-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCenterComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe,
    AdminCenterComponent,
    StudentCenterComponent,
    TeacherCenterComponent,
    HomeworkListComponent,
    UserListComponent,
		FooterComponent,
		LoginComponent,
		UserRedirectComponent,
		UserCreateComponent,
		CohortCreateComponent,
		LessonCreateComponent,
		HomeworkCreateComponent,
		LessonListComponent,
		CohortDetailComponent,
		UserDetailComponent,
		HomeworkDetailComponent,
		LessonDetailComponent,
		CohortListComponent
		MainFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterializeModule,
		MatSidenavModule, 
		MatButtonModule, 
		MatCheckboxModule, 
		MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
