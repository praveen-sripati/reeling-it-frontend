import { useEffect, useState } from 'react';
import { Movie, MovieData } from './api-interfaces/landing-section';
import { CinemaCarousel } from './CinemaCarousel';
import { useRealEventMovies } from './hooks/useRealEventMovies';
import { useTwentyTwoBestHits } from './hooks/useTwentyTwoBestHits';
import { useWeeklyMovies } from './hooks/useWeeklyMovies';

const BASE_API_URL = 'http://localhost:3000/api';

export const LandingSection = () => {
  const [weeklyMovies, isWeeklyMoviesLoading] = useWeeklyMovies(BASE_API_URL);
  const [twentyTwoBestHitMovies, isTwentyTwoBestHitMoviesLoading] =
    useTwentyTwoBestHits(BASE_API_URL);
  const [realEventMovies, isrealEventMoviesLoading] =
    useRealEventMovies(BASE_API_URL);

  return (
    <>
      <CinemaCarousel
        sectionTitle="This's Weeks Top Ten"
        isLoading={isWeeklyMoviesLoading}
        movies={weeklyMovies}
        classes="mb-8"
      />
      <CinemaCarousel
        sectionTitle="2022 Best Hits"
        isLoading={isTwentyTwoBestHitMoviesLoading}
        movies={twentyTwoBestHitMovies}
        classes="mb-8"
      />
      <CinemaCarousel
        sectionTitle="Based on True Stories"
        isLoading={isrealEventMoviesLoading}
        movies={realEventMovies}
      />
    </>
  );
};
