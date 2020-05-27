import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';
import {EmployeeOutreachDetailsComponent} from './components/employee-outreach-details/employee-outreach-details.component';
import {ActivityTrackerComponent} from './components/activity-tracker/activity-tracker.component';


const routes: Routes = [
  {path : '', component : HomePageComponent},
  {path : 'employee-outreach', component : EmployeeDetailsComponent},
  {path : 'attendance-tracker', component : EmployeeOutreachDetailsComponent},
  {path : 'activity-tracker', component : ActivityTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
