import { useEffect, useState } from 'react';
import { Movie, MovieData } from '../api-interfaces/landing-section';

export const useTwentyTwoBestHits = (baseUrl: string): [Movie[], boolean] => {
  const [twentyTwoBestHitMovies, setTwentyTwoBestHitMovies] = useState<Movie[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTwentyTwoBestHitMovies = async () => {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/year-twenty-two-top-movies`, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4YzhlYThiLTc0MmEtNGIyZC1hODM1LTI5MTMyMWNkMGUxOCIsInVzZXJuYW1lIjoiYW5hbmQiLCJpYXQiOjE2NzY3NjEzOTh9.sAjwoAfmkMGk1N-6zqdDUwatfiNIUqZy-BuaXh3v4CA',
        },
      });

      const newData = (await response.json().then((res: Response) => {
        setIsLoading(false);
        return res;
      })) as MovieData;

      if (newData) {
        setTwentyTwoBestHitMovies(newData.data.movies);
      }
    };

    void fetchTwentyTwoBestHitMovies();
  }, []);

  return [twentyTwoBestHitMovies, isLoading];
};
