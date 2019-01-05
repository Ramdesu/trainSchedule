import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'timetable', component: ScheduleComponent},
  { path: 'cp', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
