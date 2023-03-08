import { useEffect, useState } from 'react';
import { Movie, MovieData } from '../global';

export const useRealEventMovies = (baseUrl: string): [Movie[], boolean] => {
  const [realEventMovies, setRealEventMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchTopTenRealEventMovies = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}/movies-based-on-real-events`, {
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
          setRealEventMovies(newData.data.movies);
        }
      } catch (error) {
        console.error('Error', error);
        setIsLoading(false);
      }
    };

    void fetchTopTenRealEventMovies();
  }, [baseUrl]);

  return [realEventMovies, isLoading];
};
