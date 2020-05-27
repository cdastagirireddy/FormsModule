import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityTrackerComponent } from './components/activity-tracker/activity-tracker.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {EmployeeOutreachDetailsComponent} from './components/employee-outreach-details/employee-outreach-details.component';
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';
import { FormsModuleComponent } from './components/forms-module/forms-module.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityTrackerComponent,
    NavbarComponent,
    HomePageComponent,
    EmployeeOutreachDetailsComponent,
    EmployeeDetailsComponent,
    FormsModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
