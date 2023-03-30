import { useEffect, useState } from 'react';

export interface Root {
  data: Data;
}

export interface Data {
  movie: Movie;
}

export interface Movie {
  id: string;
  name: string;
  parent_id: string;
  date: string;
  series_id: string;
  kind: string;
  runtime: number;
  budget: string;
  revenue: string;
  homepage: string;
  vote_average: string;
  votes_count: string;
  trailers: Trailer[];
  movie_links: MovieLink[];
  movie_languages: MovieLanguage[];
  movie_countries: MovieCountry[];
  movie_categories: MovieCategory[];
  movie_abstracts_en: MovieAbstractEn;
  casts: Cast[];
  poster: string;
}

export interface MovieAbstractEn {
  abstract: string;
}

export interface MovieLink {
  key: string;
  language: string;
  source: string;
}

export interface MovieLanguage {
  language: string;
}

export interface MovieCountry {
  country: string;
}

export interface MovieCategory {
  categories: Categories;
}

export interface Categories {
  name: string;
}

export interface Cast {
  role: string;
  people: People;
  jobs: Jobs;
  person_id: string;
  image_ids: ImageId[];
}

export interface People {
  id: string;
  name: string;
  birthday?: string;
  deathday: string;
  gender?: number;
}

export interface Jobs {
  id: string;
  name: string;
}

export interface ImageId {
  image_id: string;
  source: string;
  license_id: string;
  author?: string;
}

export interface Trailer {
  embed_link?: string;
  key?: string;
  language?: string;
  movie_id?: string;
  source?: string;
  trailer_id?: string;
}

export const useMovieDetail = (
  baseUrl: string,
  movieId: string
): [Data['movie'], boolean] => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoadingMovie, setIsLoadingMovie] = useState<boolean>(false);

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoadingMovie(true);
      try {
        const response = await fetch(`${baseUrl}/movie/${movieId}`, {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4YzhlYThiLTc0MmEtNGIyZC1hODM1LTI5MTMyMWNkMGUxOCIsInVzZXJuYW1lIjoiYW5hbmQiLCJpYXQiOjE2NzY3NjEzOTh9.sAjwoAfmkMGk1N-6zqdDUwatfiNIUqZy-BuaXh3v4CA',
          },
        });

        const newData = (await response.json().then((res: Response) => {
          setIsLoadingMovie(false);
          return res;
        })) as Root;
        if (newData) {
          setMovie(newData.data.movie);
        }
      } catch (error) {
        console.error('Error', error);
        setIsLoadingMovie(false);
      }
    };

    void fetchMovie();
  }, [baseUrl, movieId]);
  console.log('Movie => ', movie);
  return [movie, isLoadingMovie];
};
