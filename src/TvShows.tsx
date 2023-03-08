import { Input, Pagination } from 'antd';
import { Dispatch, useState } from 'react';
import { ReactComponent as NoDataFoundSvg } from './assets/illustrations/no-data-v1.svg';
import { CinemaCard } from './CinemaCard';
import { CinemaCardSkeleton } from './CinemaCardSkeleton';
import { EmptyState } from './EmptyState';
import { BASE_API_URL, PaginationQueryParams } from './global';
import { useTvShowsWithPagination } from './hooks/useTvShowsWithPagination';

const { Search } = Input;

const handlePageChange = (
  page: number,
  pageSize: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setPageSize: React.Dispatch<React.SetStateAction<number>>
) => {
  setPage(page);
  setPageSize(pageSize);
};

const handlePageSizeChange = (
  current: number,
  size: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setPageSize: React.Dispatch<React.SetStateAction<number>>
) => {
  setPage(current);
  setPageSize(size);
};

const onSearchTvShows = (
  search: string,
  setSearch: Dispatch<React.SetStateAction<string>>,
  setPage: Dispatch<React.SetStateAction<number>>
) => {
  console.log('search => ', search);
  if (search.length > 0) {
    setPage(1);
  }
  setSearch(search);
};

export const TvShows = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<PaginationQueryParams['limit']>(10);
  const [search, setSearch] = useState<string>('');
  const [tvShows, totalPages, isTvShowsLoading] = useTvShowsWithPagination(
    BASE_API_URL,
    {
      page,
      limit: pageSize,
      search,
    }
  );

  return (
    <section className="py-10">
      <div className="flex flex-col w-2/6 min-w-[16rem]">
        <Search
          placeholder="Ex: Breaking Bad"
          allowClear
          onSearch={(search) => onSearchTvShows(search, setSearch, setPage)}
          loading={isTvShowsLoading}
        />
      </div>
      <ul className="flex flex-wrap -mx-5">
        {isTvShowsLoading &&
          new Array(pageSize)
            .fill(0, 0, pageSize)
            .map((value, index) => (
              <CinemaCardSkeleton key={index} classes="m-6 w-[200px]" />
            ))}
        {!isTvShowsLoading && tvShows.length === 0 && (
          <div className="m-5 w-full">
            <EmptyState>
              <NoDataFoundSvg className="mb-4" width={200} height={200} />
              <h2 className="text-ps-title-color text-ps-h2-font-size">
                No data found
              </h2>
            </EmptyState>
          </div>
        )}
        {!isTvShowsLoading &&
          tvShows.length > 0 &&
          tvShows.map((movie, index) => {
            return (
              <CinemaCard key={index} movie={movie} classes="m-6 w-[200px]" />
            );
          })}
      </ul>

      <div className="flex justify-end">
        <div className="inline-flex justify-center p-2 pr-4 rounded-lg bg-ps-first-color">
          <Pagination
            current={page}
            total={totalPages}
            pageSizeOptions={['10', '20', '50']}
            showQuickJumper
            onChange={(page, pageSize) =>
              handlePageChange(page, pageSize, setPage, setPageSize)
            }
            onShowSizeChange={(current, size) =>
              handlePageSizeChange(current, size, setPage, setPageSize)
            }
          />
        </div>
      </div>
    </section>
  );
};
