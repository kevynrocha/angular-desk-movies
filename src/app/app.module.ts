import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './movies/pages/home/home.component';
import { PopularComponent } from './movies/pages/popular/popular.component';
import { UpcomingComponent } from './movies/pages/upcoming/upcoming.component';
import { routing } from './app.routing';
import { HeaderComponent } from './movies/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movies/pages/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopularComponent,
    UpcomingComponent,
    HeaderComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
