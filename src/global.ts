export const BASE_API_URL = 'http://localhost:3000/api';

// #region Movies types
export type Movie = {
  name: string;
  date: string;
  poster: string;
};

export type Movies = {
  movies: Movie[];
};

export type MovieData = {
  data: Movies;
};

export type MoviesWithPagination = Movies & {
  total_pages: number;
};

export type MovieDataWithPagination = {
  data: MoviesWithPagination;
};
// #endregion Movies types

// #region Tv Shows types
export type TvShow = {
  name: string;
  date: string;
  poster: string;
};

export type TvShows = {
  tv_shows: TvShow[];
};

export type TvShowData = {
  data: TvShows;
};

export type TvShowsWithPagination = TvShows & {
  total_pages: number;
};

export type TvShowDataWithPagination = {
  data: TvShowsWithPagination;
};

// #endregion Tv Shows types

export type PaginationQueryParams = {
  page: number;
  limit: 10 | 20 | 50;
  search: string;
};
