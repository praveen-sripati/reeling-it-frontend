import { useEffect, useState } from 'react';
import {
  TvShowDataWithPagination,
  TvShowsWithPagination,
  PaginationQueryParams,
} from '../global';

export const useTvShowsWithPagination = (
  baseUrl: string,
  { page, limit, search }: PaginationQueryParams
): [
  TvShowsWithPagination['tv_shows'],
  TvShowsWithPagination['total_pages'],
  boolean
] => {
  const [tvShowsWithPagination, setTvShowsWithPagination] =
    useState<TvShowsWithPagination>({ tv_shows: [], total_pages: 1 });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTvShowsWithPagination = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${baseUrl}/tvshows?search=${search}&page=${page}&limit=${limit}`,
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
        })) as TvShowDataWithPagination;
        if (newData) {
          setTvShowsWithPagination(newData.data);
        }
      } catch (error) {
        console.error('Error', error);
        setIsLoading(false);
      }
    };

    void fetchTvShowsWithPagination();
  }, [baseUrl, page, limit, search]);

  return [
    tvShowsWithPagination.tv_shows,
    tvShowsWithPagination.total_pages,
    isLoading,
  ];
};
