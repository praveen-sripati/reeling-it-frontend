import { useEffect, useState } from 'react';
import { Movie, MovieData } from './api-interfaces/landing-section';
import { CinemaCarousel } from './CinemaCarousel';
import './LandingSection.css';

export const LandingSection = () => {
  const baseUrl = 'http://localhost:3000/api';
  const [weeklyMovies, setWeeklyMovies] = useState<Movie[]>([]);
  const [realEventMovies, setRealEventMovies] = useState<Movie[]>([]);
  const [twentyTwoBestHitMovies, setTwentyTwoBestHitMovies] = useState<Movie[]>(
    []
  );

  useEffect(() => {
    const fetchWeeklyTopTenMovies = async () => {
      const response = await fetch(`${baseUrl}/top-ten-movies-weekly`, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4YzhlYThiLTc0MmEtNGIyZC1hODM1LTI5MTMyMWNkMGUxOCIsInVzZXJuYW1lIjoiYW5hbmQiLCJpYXQiOjE2NzY3NjEzOTh9.sAjwoAfmkMGk1N-6zqdDUwatfiNIUqZy-BuaXh3v4CA',
        },
      });

      const newData = (await response.json()) as MovieData;

      if (newData) {
        setWeeklyMovies(newData.data.movies);
      }
    };

    void fetchWeeklyTopTenMovies();
  }, []);

  useEffect(() => {
    const fetchTwentyTwoBestHitMovies = async () => {
      const response = await fetch(`${baseUrl}/year-twenty-two-top-movies`, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4YzhlYThiLTc0MmEtNGIyZC1hODM1LTI5MTMyMWNkMGUxOCIsInVzZXJuYW1lIjoiYW5hbmQiLCJpYXQiOjE2NzY3NjEzOTh9.sAjwoAfmkMGk1N-6zqdDUwatfiNIUqZy-BuaXh3v4CA',
        },
      });

      const newData = (await response.json()) as MovieData;

      if (newData) {
        setTwentyTwoBestHitMovies(newData.data.movies);
      }
    };

    void fetchTwentyTwoBestHitMovies();
  }, []);

  useEffect(() => {
    const fetchTopTenRealEventMovies = async () => {
      const response = await fetch(`${baseUrl}/movies-based-on-real-events`, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4YzhlYThiLTc0MmEtNGIyZC1hODM1LTI5MTMyMWNkMGUxOCIsInVzZXJuYW1lIjoiYW5hbmQiLCJpYXQiOjE2NzY3NjEzOTh9.sAjwoAfmkMGk1N-6zqdDUwatfiNIUqZy-BuaXh3v4CA',
        },
      });

      const newData = (await response.json()) as MovieData;

      if (newData) {
        setRealEventMovies(newData.data.movies);
      }
    };

    void fetchTopTenRealEventMovies();
  }, []);

  return (
    <>
      <CinemaCarousel
        sectionTitle="This's Weeks Top Ten"
        movies={weeklyMovies}
        classes="mb-8"
      />
      <CinemaCarousel
        sectionTitle="2022 Best Hits"
        movies={twentyTwoBestHitMovies}
        classes="mb-8"
      />
      <CinemaCarousel
        sectionTitle="Based on True Stories"
        movies={realEventMovies}
      />
    </>
  );
};
