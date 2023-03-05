import { CinemaCard } from './CinemaCard';

const dummy = [
  {
    name: 'Kraven the Hunter',
    date: '2023-10-04T00:00:00.000Z',
    total_pages: 19166,
    poster:
      'https://m.media-amazon.com/images/M/MV5BYzRmOTBjY2ItY2I1My00YjRkLTk1Y2MtZmYzZTExMTk3NDI5XkEyXkFqcGdeQXVyNTc2MDc2ODQ@._V1_SX300.jpg',
  },
  {
    name: 'Salaar',
    date: '2023-09-28T00:00:00.000Z',
    total_pages: 19166,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjQ3MzhlNzQtZGEyOC00OWI2LWI5NDAtNTlmMTUwMGI3ODM3XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_SX300.jpg',
  },
  {
    name: 'The Last Voyage of Demeter',
    date: '2023-08-11T00:00:00.000Z',
    total_pages: 19166,
    poster: 'N/A',
  },
  {
    name: 'Rocky Aur Rani Ki Prem Kahani',
    date: '2023-07-28T00:00:00.000Z',
    total_pages: 19166,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMzY4ODMxY2YtMjgzMy00OWZkLWIyNGEtZTlmN2FjOGMyYmVjXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg',
  },
  {
    name: 'Madame Web',
    date: '2023-07-07T00:00:00.000Z',
    total_pages: 19166,
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjUzYmQzOGQtYWJiYS00N2MwLWE5NDItZWU0MzY5M2RiNzNkXkEyXkFqcGdeQXVyMTQyODY0NjI5._V1_SX300.jpg',
  },
  {
    name: 'Indiana Jones 5',
    date: '2023-06-29T00:00:00.000Z',
    total_pages: 19166,
    poster: 'N/A',
  },
  {
    name: 'The Flash',
    date: '2023-06-16T00:00:00.000Z',
    total_pages: 19166,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjlkM2RjODgtNjRlYS00MDNjLTkxMzYtOWM4NjAwZTY2MjZiXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg',
  },
  {
    name: 'Spider-Man: Across the Spider-Verse',
    date: '2023-06-02T00:00:00.000Z',
    total_pages: 19166,
    poster:
      'https://m.media-amazon.com/images/M/MV5BNjk5YTU0OTAtMTM1NC00Zjc1LWEzZjAtOWJkYzcxOGRhNWNhXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg',
  },
  {
    name: 'Yer Eksi İki',
    date: '2023-06-01T00:00:00.000Z',
    total_pages: 19166,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZDBjZDIzMjYtMzkyMC00MzY2LWI2MDctOGUxY2YyN2U5YjY1XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg',
  },
  {
    name: 'Cenazemize Hoş Geldiniz',
    date: '2023-06-01T00:00:00.000Z',
    total_pages: 19166,
    poster: 'N/A',
  },
];

export const Movies = () => {
  return (
    <>
      <ul className="flex flex-wrap -mx-5">
        {dummy.map((movie, index) => {
          return (
            <CinemaCard key={index} movie={movie} classes="m-5 w-[200px]" />
          );
        })}
      </ul>
    </>
  );
};
