import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './movies/pages/home/home.component';
import { UpcomingComponent } from './movies/pages/upcoming/upcoming.component';
import { PopularComponent } from './movies/pages/popular/popular.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'upcoming', component: UpcomingComponent },
    { path: 'popular', component: PopularComponent  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);