import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { Counter2Service } from './shared/services/counter2.service';
import { TestService } from './shared/services/test.service';
import { counterFactory } from './shared/services/counter.factory';
import { HomeComponent } from './public-components/home/home.component';
import { AboutUsComponent } from './public-components/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],

  providers: [
    counterFactory
    ,TestService, Counter2Service, { provide: 'appTitle', useValue: 'this is the title app'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
