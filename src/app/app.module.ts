import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';
import { BasicInformationComponent } from './components/basic-information/basic-information.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCoverComponent,
    BasicInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
