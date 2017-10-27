import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { StudentCenterComponent } from './student-center/student-center.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { SidebarNavCollapsedComponent } from './sidebar-nav-collapsed/sidebar-nav-collapsed.component';
import { StudentCreationComponent } from './student-creation/student-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
		AdminCenterComponent,
		StudentCenterComponent,
		CalendarComponent,
		SidebarNavComponent,
		SidebarNavCollapsedComponent,
		StudentCreationComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
		MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
