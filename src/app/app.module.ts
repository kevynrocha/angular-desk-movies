import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './movies/pages/home/home.component';
import { NowPlayingComponent } from './movies/pages/now-playing/now-playing.component';
import { PopularComponent } from './movies/pages/popular/popular.component';
import { UpcomingComponent } from './movies/pages/upcoming/upcoming.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NowPlayingComponent,
    PopularComponent,
    UpcomingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
