import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';
import { DurationMoviePipe } from '../../pipes/duration-movie.pipe';
import { toMillionPipe } from '../../pipes/to-million.pipe';
import { MovieService } from '../../services/movie.service';
import { JoinPipe } from '../../pipes/join.pipe';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, DurationMoviePipe, toMillionPipe, JoinPipe],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  private movieService = inject(MovieService);

  @Input()
  public idMovie!: String;

  public movie$!: Observable<Movie>;

  public ngOnInit(): void {
    this.movie$ = this.movieService.getMovie(this.idMovie);
  }
}
