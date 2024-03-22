import { Routes } from '@angular/router';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: MoviesListComponent,
  },
  {
    path: 'movies/:idMovie',
    component: MovieDetailComponent,
  },
  {
    path: '**',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
];
