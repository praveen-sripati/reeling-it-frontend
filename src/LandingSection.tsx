import { useEffect, useState } from 'react';
import { BASE_API_URL, Movie, MovieData } from './global';
import { CinemaCarousel } from './CinemaCarousel';
import { useRealEventMovies } from './hooks/useRealEventMovies';
import { useTwentyTwoBestHits } from './hooks/useTwentyTwoBestHits';
import { useWeeklyMovies } from './hooks/useWeeklyMovies';

export const LandingSection = () => {
  const [weeklyMovies, isWeeklyMoviesLoading] = useWeeklyMovies(BASE_API_URL);
  const [twentyTwoBestHitMovies, isTwentyTwoBestHitMoviesLoading] =
    useTwentyTwoBestHits(BASE_API_URL);
  const [realEventMovies, isrealEventMoviesLoading] =
    useRealEventMovies(BASE_API_URL);

  return (
    <section className="py-10">
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
    </section>
  );
};
