import { MovieSummaryApi } from './movie-summary-api.interface';
import { Movie } from './movie.interface';

export type MovieSummary = Pick<Movie, 'id' | 'title' | 'duration' | 'budget' | 'releaseDate'>;

export function apiToMovieSummary(movie: MovieSummaryApi): MovieSummary {
  return {
    id: movie.id,
    title: movie.title,
    duration: movie.duration,
    budget: movie.budget,
    releaseDate: new Date(movie.release_date),
  };
}
