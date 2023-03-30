import { Button, Skeleton, Tag } from 'antd';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as FemaleAvatarPlaceholder } from './assets/illustrations/female-avatar-placeholder.svg';
import { ReactComponent as MaleAvatarPlaceholder } from './assets/illustrations/male-avatar-placeholder.svg';
import { ReactComponent as TrailerNotFoundSvg } from './assets/illustrations/yt-empty-placeholder.svg';
import { ReactComponent as ArrowBackwardIcon } from './assets/icons/arrow-backward.svg';
import { BASE_API_URL } from './global';
import { useMovieDetail } from './hooks/useMovie';
import { useEffect } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';

function getRandomColor() {
  const colors = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple',
  ];
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

export const MovieDetail = () => {
  // Get the movieId param from the URL.
  const { movieId } = useParams();
  const navigate = useNavigate();

  const [movie, isLoadingMovie] = useMovieDetail(BASE_API_URL, movieId);
  return (
    <section className="py-10">
      {(isLoadingMovie || !movie) && (
        <>
          <div className="w-[400px]">
            <Skeleton.Button
              active={true}
              size="large"
              shape="square"
              block={true}
              className="mb-4"
            />
          </div>
          <section className="flex gap-9">
            <div className="flex flex-col items-center rounded-lg outline h-[445px] w-[300px] justify-center p-5">
              <Skeleton.Image className="mt-4" active={true} />
            </div>
            <div className="flex flex-col items-center rounded-lg outline h-[445px] w-[600px] justify-between p-5">
              <div className="flex justify-center items-center flex-1">
                <Skeleton.Image active={true} />
              </div>
              <Skeleton
                active={true}
                round={true}
                title={true}
                paragraph={false}
                className="self-end"
              />
            </div>
            <div className="flex flex-col flex-1">
              <Skeleton.Button
                active={true}
                size="large"
                shape="square"
                block={true}
                className="mb-4"
              />
              <Skeleton.Button
                active={true}
                size="large"
                shape="square"
                block={true}
                className="mb-4"
              />
              <Skeleton.Button
                active={true}
                size="large"
                shape="square"
                block={true}
              />
            </div>
          </section>
          <div className="flex mt-4">
            {[0, 0, 0].map((skeleton, index) => (
              <div className="mr-4 mb-3 w-[150px]" key={index}>
                <Skeleton.Button
                  active={true}
                  size="small"
                  shape="square"
                  block={true}
                />
              </div>
            ))}
          </div>
          <section className="max-w-5xl mx-auto">
            <div className="w-[300px] mt-6 mb-6">
              <Skeleton.Button shape="round" active={true} block={true} />
            </div>
            <ul className="grid gap-10 grid-cols-2">
              {[0, 0, 0, 0, 0].map((skeleton, index) => (
                <li className="flex rounded-lg" key={index}>
                  <Skeleton.Image
                    active={true}
                    className="w-[90px] h-[130px]"
                  />
                  <div className="flex items-center flex-1">
                    <Skeleton
                      className="px-4 mb-8"
                      active={true}
                      round={true}
                      title={false}
                      paragraph={true}
                    />
                    {/* <Skeleton
                    className="px-4 mb-4"
                    active={true}
                    round={true}
                    title={true}
                    paragraph={false}
                  />
                  <Skeleton
                    className="px-4 mb-4"
                    active={true}
                    round={true}
                    title={true}
                    paragraph={false}
                  />
                  <Skeleton
                    className="px-4 mb-4"
                    active={true}
                    round={true}
                    title={true}
                    paragraph={false}
                  /> */}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
      {movie && (
        <>
          <div className="flex items-center mb-4">
            <Button
              type="ghost"
              icon={<ArrowLeftOutlined height={40} width={40} />}
              size="large"
              shape="circle"
              onClick={() => navigate(-1)}
              className="flex justify-center items-center bg-transparent hover:bg-ps-first-color mr-4"
            />
            <h1 className="text-3xl">
              {`${movie.name} ${
                movie?.date ? `(${new Date(movie.date).getFullYear()})` : ``
              }`}
            </h1>
          </div>
          <div className="flex flex-row">
            <img
              src={movie.poster}
              className="rounded-lg mr-8"
              alt={movie.name}
              width={300}
            />
            {movie.trailers?.length > 0 ? (
              <iframe
                className="rounded-lg"
                width={600}
                src={
                  movie.trailers.length > 0
                    ? movie.trailers[0].embed_link
                    : null
                }
                title="Double Level Mega Ramp 666.666% People Cannot Complete This Challenge Race in GTA 5!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <div
                className="flex items-center justify-center bg-ps-first-color rounded-md"
                title="Trailer Not Found"
              >
                <TrailerNotFoundSvg width={600} height={350} />
              </div>
            )}
            <div className="flex flex-col flex-1 ml-8">
              {movie.movie_links
                .filter((movieLink) => movieLink.language === 'en')
                .map((movieLink) => (
                  <>
                    {(movieLink.source === 'wikipedia' ||
                      movieLink.source === 'wikidata') && (
                      <a
                        href={`https://en.wikipedia.org/wiki/${movieLink.key}`}
                        target="_blank"
                        rel="noreferrer"
                        key={movieLink.key}
                        className="p-3 rounded-lg bg-white text-black mb-4 font-bold text-center"
                      >
                        Wikipedia
                      </a>
                    )}
                    {movieLink.source === 'imdbmovie' && (
                      <a
                        href={`https://en.wikipedia.org/wiki/${movieLink.key}`}
                        rel="noreferrer"
                        key={movieLink.key}
                        className="p-3 rounded-lg bg-[#f5c518] text-black font-bold mb-4 text-center"
                      >
                        IMDB
                      </a>
                    )}
                    {movieLink.source === 'moviepilot' && (
                      <a
                        href={`https://en.wikipedia.org/wiki/${movieLink.key}`}
                        rel="noreferrer"
                        key={movieLink.key}
                        className="p-3 rounded-lg bg-red-500 text-black font-bold text-center"
                      >
                        Movie pilot
                      </a>
                    )}
                  </>
                ))}
            </div>
          </div>
          <div className="mt-4">
            {movie.movie_categories.map((mvCategories) => {
              return (
                <Tag
                  color={getRandomColor()}
                  key={mvCategories.categories.name}
                  className="mr-4 mb-3"
                >
                  {mvCategories.categories.name}
                </Tag>
              );
            })}
          </div>
          <section className="max-w-5xl mx-auto">
            {movie.movie_abstracts_en?.abstract && (
              <p className="rounded-xl p-4 mt-6 bg-ps-first-color hover:bg-white hover:bg-opacity-10 transition-all first-letter:text-5xl first-letter:text-green-300">
                {movie?.movie_abstracts_en?.abstract}
              </p>
            )}

            <h3 className="text-ps-big-font-size mt-6 mb-4 text-">Casting</h3>
            <ul className="grid gap-10 grid-cols-2">
              {movie.casts.map((cast) => {
                const { role, jobs, image_ids, people } = cast;
                const { gender } = people;
                return (
                  <>
                    <li
                      key={cast.person_id}
                      className="flex rounded-lg outline outline-transparent outline-offset-0 hover:outline-2 hover:outline-ps-third-color hover:outline-offset-4 hover:bg-ps-first-color transition-all cursor-pointer"
                    >
                      {image_ids.length > 0 && (
                        <img
                          className="rounded-md object-cover"
                          src={image_ids[0]?.source}
                          width={90}
                          alt="casting"
                        />
                      )}

                      {image_ids.length === 0 && gender !== 1 && (
                        <MaleAvatarPlaceholder
                          className="rounded-md bg-ps-first-color p-2"
                          width={90}
                          height={120}
                        />
                      )}

                      {image_ids.length === 0 && gender === 1 && (
                        <FemaleAvatarPlaceholder
                          className="rounded-md bg-ps-first-color p-2"
                          width={90}
                          height={120}
                        />
                      )}

                      <div className="flex flex-col justify-center px-6">
                        <p className="text-ps-title-color text-ps-h2-font-size mb-1">
                          {people?.name ?? 'N/A'}
                        </p>
                        <p className="text-ps-normal-font-size text-ps-text-color-light mb-1">
                          {role ? cast.role : 'N/A'}
                        </p>
                        <p className="text-ps-normal-font-size text-ps-text-color-light">
                          {jobs?.name ? cast?.jobs?.name : 'N/A'}
                        </p>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
          </section>
        </>
      )}
    </section>
  );
};
