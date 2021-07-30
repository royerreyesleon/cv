import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skill/skill.component';
import { BriefcaseComponent } from './components/briefcase/briefcase.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PracticesComponent } from './components/practices/practices.component';
// import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    BriefcaseComponent,
    CoursesComponent,
    PracticesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [{provide: APP_BASE_HREF, useValue: '#'}],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
