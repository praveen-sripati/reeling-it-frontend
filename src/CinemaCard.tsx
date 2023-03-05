import { Movie } from './api-interfaces/landing-section';

export const CinemaCard = ({
  movie,
  classes,
}: {
  movie: Movie;
  classes?: string;
}) => {
  return (
    <li
      className={`flex flex-col items-center rounded-lg outline outline-transparent outline-offset-0 hover:outline-2 hover:outline-ps-third-color hover:outline-offset-4 hover:bg-ps-first-color transition-all cursor-pointer ${classes}`}
    >
      <img
        className="rounded-lg h-[290px] object-cover object-center"
        src={
          movie.poster === 'N/A'
            ? 'https://picsum.photos/160/240'
            : movie.poster
        }
        alt=""
        width={200}
        height={290}
      />
      <p className="text-ps-normal-font-size text-ps-text-color p-3">
        {movie.name}
      </p>
    </li>
  );
};
