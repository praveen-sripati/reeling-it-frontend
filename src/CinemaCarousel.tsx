import { useRef } from 'react';
import { ReactComponent as ArrowForwardIcon } from './assets/icons/arrow-forward.svg';
import { ReactComponent as LeftChevronIcon } from './assets/icons/left-caro-chevron.svg';
import { ReactComponent as RightChevronIcon } from './assets/icons/right-caro-chevron.svg';
import { ReactComponent as NoDataFoundSvg } from './assets/illustrations/no-data-v1.svg';
import { CinemaCard } from './CinemaCard';
import { EmptyState } from './EmptyState';
import { Movie } from './global';

import { CinemaCardSkeleton } from './CinemaCardSkeleton';
import './CinemaCarousel.css';

export type CinemaCarouselProps = {
  sectionTitle: string;
  isLoading?: boolean;
  movies: Movie[];
  classes?: string;
};

export const CinemaCarousel = ({
  sectionTitle,
  isLoading,
  movies,
  classes,
}: CinemaCarouselProps) => {
  const containerRef = useRef<HTMLUListElement>(null);

  const handleRightMovementOfCarousel = () => {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollToView = scrollLeft + container.clientWidth;
    container.scrollTo({ left: scrollToView, behavior: 'smooth' });
  };

  const handleLeftMovementOfCarousel = () => {
    const container = containerRef.current;
    let scrollViewToLeft = 0;
    if (container.scrollLeft > container.clientWidth) {
      scrollViewToLeft = container.scrollLeft - container.clientWidth;
    }
    container.scrollTo({ left: scrollViewToLeft, behavior: 'smooth' });
  };

  return (
    <section className={`${classes}`}>
      <div className="flex justify-between">
        <div className="group flex items-center mb-3">
          <h3 className="mr-4">{`${sectionTitle}`.toUpperCase()}</h3>
          <ArrowForwardIcon
            className="fill-ps-title-color translate-x-0 group-hover:translate-x-2 transition ease-in-out group-hover:transition-transform"
            width={22}
            height={22}
          />
        </div>
        <div className="flex">
          <LeftChevronIcon
            className="mr-4 cursor-pointer"
            width={22}
            height={22}
            onClick={handleLeftMovementOfCarousel}
          />
          <RightChevronIcon
            className="cursor-pointer"
            width={22}
            height={22}
            onClick={handleRightMovementOfCarousel}
          />
        </div>
      </div>
      <section className="-m-2">
        <ul
          ref={containerRef}
          className="cinema-carousel-list flex snap-proximity snap-x overflow-scroll scroll-smooth p-2 scroll-p-2"
        >
          {(isLoading || !movies) &&
            [0, 0, 0, 0, 0].map((value, index) => (
              <CinemaCardSkeleton classes="mr-10" key={index} />
            ))}
          {!isLoading && movies.length === 0 && (
            <EmptyState>
              <NoDataFoundSvg className="mb-4" width={200} height={200} />
              <h2 className="text-ps-title-color text-ps-h2-font-size">
                No data found
              </h2>
            </EmptyState>
          )}
          {movies.length > 0 &&
            movies.map((movie, index) => {
              return (
                <CinemaCard
                  movie={movie}
                  key={index}
                  classes="mr-10 min-w-[200px] snap-start"
                />
              );
            })}
        </ul>
      </section>
    </section>
  );
};
