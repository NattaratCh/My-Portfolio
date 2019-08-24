import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';
import { BasicInformationComponent } from './components/basic-information/basic-information.component';
import { ProfessionalSkillComponent } from './components/professional-skill/professional-skill.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { EducationComponent } from './components/education/education.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCoverComponent,
    BasicInformationComponent,
    ProfessionalSkillComponent,
    WorkExperienceComponent,
    ProgressBarComponent,
    EducationComponent,
    TopMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
