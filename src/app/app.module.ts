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
import { ClassListComponent } from './class-list/class-list.component';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

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
    ClassListComponent,
    HomeworkListComponent,
    UserListComponent,
		FooterComponent,
		LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
