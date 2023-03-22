import { useEffect, useState } from 'react';
import {
  MovieDataWithPagination,
  MoviesWithPagination,
  PaginationQueryParams,
} from '../global';

export const useMoviesWithPagination = (
  baseUrl: string,
  {
    page,
    limit,
    search,
    genre,
    dateRangeLowerYear,
    dateRangeUpperYear,
  }: PaginationQueryParams
): [
  MoviesWithPagination['movies'],
  MoviesWithPagination['total_pages'],
  MoviesWithPagination['total_items'],
  boolean
] => {
  const [moviesWithPagination, setMoviesWithPagination] =
    useState<MoviesWithPagination>({
      movies: [],
      total_pages: 1,
      total_items: 1,
    });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchMoviesWithPagination = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${baseUrl}/movies?search=${search}&page=${page}&limit=${limit}&genre=${genre}&year_lower=${dateRangeLowerYear}&year_upper=${dateRangeUpperYear}`,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4YzhlYThiLTc0MmEtNGIyZC1hODM1LTI5MTMyMWNkMGUxOCIsInVzZXJuYW1lIjoiYW5hbmQiLCJpYXQiOjE2NzY3NjEzOTh9.sAjwoAfmkMGk1N-6zqdDUwatfiNIUqZy-BuaXh3v4CA',
            },
          }
        );

        const newData = (await response.json().then((res: Response) => {
          setIsLoading(false);
          return res;
        })) as MovieDataWithPagination;
        if (newData) {
          setMoviesWithPagination(newData.data);
        }
      } catch (error) {
        console.error('Error', error);
        setIsLoading(false);
      }
    };

    void fetchMoviesWithPagination();
  }, [
    baseUrl,
    page,
    limit,
    search,
    genre,
    dateRangeLowerYear,
    dateRangeUpperYear,
  ]);

  return [
    moviesWithPagination.movies,
    moviesWithPagination.total_pages,
    moviesWithPagination.total_items,
    isLoading,
  ];
};
