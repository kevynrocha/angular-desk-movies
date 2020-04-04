import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './movies/pages/home/home.component';
import { UpcomingComponent } from './movies/pages/upcoming/upcoming.component';
import { PopularComponent } from './movies/pages/popular/popular.component';
import { ModuleWithProviders } from '@angular/core';
import { MovieDetailsComponent } from './movies/pages/movie-details/movie-details.component';

const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },    
    { path: 'popular', component: PopularComponent  },
    { path: 'upcoming', component: UpcomingComponent },
    { path: 'movie/:id', component: MovieDetailsComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);