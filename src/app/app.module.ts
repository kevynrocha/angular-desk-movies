import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './movies/pages/home/home.component';
import { PopularComponent } from './movies/pages/popular/popular.component';
import { UpcomingComponent } from './movies/pages/upcoming/upcoming.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopularComponent,
    UpcomingComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
