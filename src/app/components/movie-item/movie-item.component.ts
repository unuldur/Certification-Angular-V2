import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieSummary } from '../../interfaces/movie-summary.interface';
import { DurationMoviePipe } from '../../pipes/duration-movie.pipe';
import { toMillionPipe } from '../../pipes/to-million.pipe';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [DurationMoviePipe, DatePipe, RouterLink, toMillionPipe],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css',
})
export class MovieItemComponent {
  @Input({ required: true })
  public movie!: MovieSummary;
}
