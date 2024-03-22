import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MovieApi } from '../interfaces/movie-api.interface';
import { MovieSummaryApi } from '../interfaces/movie-summary-api.interface';
import { apiToMovieSummary, MovieSummary } from '../interfaces/movie-summary.interface';
import { apiToMovie, Movie } from '../interfaces/movie.interface';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private httpClient = inject(HttpClient);

  public getMovies(): Observable<Array<MovieSummary>> {
    return this.httpClient.get<Array<MovieSummaryApi>>('/movies').pipe(map((movies) => movies.map((movie) => apiToMovieSummary(movie))));
  }

  public getMovie(id: String): Observable<Movie> {
    return this.httpClient.get<MovieApi>(`/movies/${id}`).pipe(map((movie) => apiToMovie(movie)));
  }
}
