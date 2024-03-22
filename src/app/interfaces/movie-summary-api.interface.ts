import { MovieApi } from './movie-api.interface';

export type MovieSummaryApi = Pick<MovieApi, 'id' | 'title' | 'duration' | 'budget' | 'release_date'>;
