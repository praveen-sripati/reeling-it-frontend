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
