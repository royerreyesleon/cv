import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent }       from './components/about/about.component';
import { ExperienceComponent }  from './components/experience/experience.component';
import { EducationComponent }   from './components/education/education.component';
import { SkillComponent }       from './components/skill/skill.component';
import { BriefcaseComponent }   from './components/briefcase/briefcase.component';
import { CoursesComponent }     from './components/courses/courses.component';
import { PracticesComponent }   from './components/practices/practices.component';
import {APP_BASE_HREF} from '@angular/common';


const routes: Routes = [
  // { path: '',         component: AboutComponent,  pathMatch: 'full'}
  // { path: '**',       component: AboutComponent,},
  // { path: '/',        component: AboutComponent,},
  { path: 'acerca-de',   component: AboutComponent,},
  { path: 'experiencia', component: ExperienceComponent,},
  { path: 'educacion',   component: EducationComponent,},
  { path: 'habilidades', component: SkillComponent,},
  { path: 'portafolio',  component: BriefcaseComponent,},
  { path: 'cursos',      component: CoursesComponent,},
  { path: 'practicas',   component: PracticesComponent,},
  { path: '**',          component: AboutComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, relativeLinkResolution:'legacy'})],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }
