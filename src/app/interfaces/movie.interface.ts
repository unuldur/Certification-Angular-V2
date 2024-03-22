import { MovieApi } from './movie-api.interface';

export interface Movie {
  id: string;
  title: string;
  duration: number;
  budget: string;
  releaseDate: Date;
  boxOffice: string;
  cinematographers: string[];
  poster: string;
  producers: string[];
  summary: string;
}

export function apiToMovie(movie: MovieApi): Movie {
  return {
    id: movie.id,
    title: movie.title,
    duration: movie.duration,
    budget: movie.budget,
    releaseDate: new Date(movie.release_date),
    boxOffice: movie.box_office,
    cinematographers: movie.cinematographers,
    poster: movie.poster,
    producers: movie.producers,
    summary: movie.summary,
  };
}
