import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieSummary } from '../../interfaces/movie-summary.interface';
import { MovieService } from '../../services/movie.service';
import { MovieFilterComponent } from '../movie-filter/movie-filter.component';
import { MovieItemComponent } from '../movie-item/movie-item.component';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MovieItemComponent, MovieFilterComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
})
export class MoviesListComponent {
  private movieService = inject(MovieService);

  public movies$: Observable<Array<MovieSummary>> = this.movieService.getMovies();

  public titleFilter: string = '';

  public releaseYearFilter: string = '';

  public isMoviePrint(movie: MovieSummary): boolean {
    const titleOk = movie.title.toLowerCase().includes(this.titleFilter.toLowerCase());
    const releaseYearOk = movie.releaseDate.getFullYear().toString().startsWith(this.releaseYearFilter);
    return titleOk && releaseYearOk;
  }
}
