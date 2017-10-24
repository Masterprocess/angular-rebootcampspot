import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminCenterComponent } from './admin-center/admin-center.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
		AdminCenterComponent
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
