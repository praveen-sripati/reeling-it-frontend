import {
  Button,
  Drawer,
  DrawerProps,
  Input,
  Pagination,
  RadioChangeEvent,
  Slider,
  Space,
  Tag,
} from 'antd';
import { Dispatch, useState } from 'react';
import { ReactComponent as NoDataFoundSvg } from './assets/illustrations/no-data-v1.svg';
import { CinemaCard } from './CinemaCard';
import { CinemaCardSkeleton } from './CinemaCardSkeleton';
import { EmptyState } from './EmptyState';
import { BASE_API_URL, PaginationQueryParams } from './global';
import { useMoviesWithPagination } from './hooks/useMoviesWithPagination';

const { Search } = Input;
const { CheckableTag } = Tag;

const genreData = ['Fantasy', 'Adventure', 'Action', 'Romance', 'War', 'Anime'];
const countryOriginData = ['India', 'USA', 'Italy', 'Japan'];

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

const onSearchMovies = (
  search: string,
  setSearch: Dispatch<React.SetStateAction<string>>,
  setPage: Dispatch<React.SetStateAction<number>>
) => {
  console.log('search => ', search);
  if (search.length > 0) {
    console.log('inside ====');
    setPage(1);
  }
  setSearch(search);
};

export const Movies = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<PaginationQueryParams['limit']>(10);
  const [search, setSearch] = useState<string>('');
  const [genre, setGenre] = useState<string>('allmovies');
  const [dateRangeYear, setDateRangeYear] = useState<[number, number]>([
    2000, 2023,
  ]);
  const [dateRangeLowerYear, setDateRangeLowerYear] = useState<number>(2000);
  const [dateRangeUpperYear, setDateRangeUpperYear] = useState<number>(2023);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps['placement']>('top');
  const [selectedGenreTags, setSelectedGenreTags] = useState<string[]>([]);
  const [selectedCountryOriginTags, setSelectedCountryOriginTags] = useState<
    string[]
  >(['India']);
  const [movies, totalPages, totalMoviesCount, isMoviesLoading] =
    useMoviesWithPagination(BASE_API_URL, {
      page,
      limit: pageSize,
      search,
      genre,
      dateRangeLowerYear,
      dateRangeUpperYear,
    });

  const handleSelectedTags = (
    tag: string,
    checked: boolean,
    setTag: Dispatch<React.SetStateAction<string[]>>
  ) => {
    const nextSelectedTags = checked
      ? [...selectedGenreTags, tag]
      : selectedGenreTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setTag(nextSelectedTags);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onApplyFilter = () => {
    const [lowerYear, upperYear] = dateRangeYear;

    // Set Page to Default i.e 1
    setPage(1);

    // Setting genre
    if (selectedGenreTags.length > 0) {
      setGenre(selectedGenreTags.join(','));
    } else {
      setGenre('allmovies');
    }

    // Setting date range (year)
    setDateRangeLowerYear(lowerYear);
    setDateRangeUpperYear(upperYear);

    setOpen(false);
  };

  const handleYearFilter = (dateRangeYear: [number, number]) => {
    setDateRangeYear(dateRangeYear);
  };

  return (
    <>
      <section className="py-10">
        <div className="flex justify-between mb-2">
          <h2 className="text-ps-h2-font-size">All Movies</h2>
          <div className="flex">
            <div className="flex flex-col w-2/6 min-w-[16rem] mr-5">
              <Search
                placeholder="Ex: Avatar"
                allowClear
                onSearch={(search) =>
                  onSearchMovies(search, setSearch, setPage)
                }
                loading={isMoviesLoading}
              />
            </div>
            <Button type="primary" onClick={showDrawer}>
              Filters
            </Button>
          </div>
        </div>
        <ul className="flex flex-wrap -mx-5">
          {isMoviesLoading &&
            new Array(pageSize)
              .fill(0, 0, pageSize)
              .map((value, index) => (
                <CinemaCardSkeleton key={index} classes="m-6 w-[200px]" />
              ))}
          {!isMoviesLoading && movies.length === 0 && (
            <div className="m-5 w-full">
              <EmptyState>
                <NoDataFoundSvg className="mb-4" width={200} height={200} />
                <h2 className="text-ps-title-color text-ps-h2-font-size">
                  No data found
                </h2>
              </EmptyState>
            </div>
          )}
          {!isMoviesLoading &&
            movies.length > 0 &&
            movies.map((movie, index) => {
              return (
                <CinemaCard key={index} movie={movie} classes="m-6 w-[200px]" />
              );
            })}
        </ul>

        <div className="flex justify-end">
          <div className="inline-flex justify-center p-2 pr-4 rounded-lg bg-ps-first-color">
            <Pagination
              current={page}
              total={totalMoviesCount}
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
      <Drawer
        title="Filters"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        keyboard={true}
        headerStyle={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}
        bodyStyle={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onApplyFilter}>
              OK
            </Button>
          </Space>
        }
      >
        <section className="grid grid-cols-8 gap-8">
          <div className="col-span-2">
            <p className="text-ps-normal-font-size font-semibold mb-5">
              {`Release Year`.toUpperCase()}
            </p>
            <Slider
              range
              min={1960}
              max={2023}
              defaultValue={[2000, 2023]}
              onChange={handleYearFilter}
            />
            <p className="flex justify-between text-ps-small-font-size">
              <span>1960</span>
              <span>2023</span>
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-ps-normal-font-size font-semibold mb-5">
              {`Genre`.toUpperCase()}
            </p>
            <Space size={[0, 8]} wrap>
              {genreData.map((tag) => (
                <CheckableTag
                  key={tag}
                  checked={selectedGenreTags.includes(tag)}
                  onChange={(checked) =>
                    handleSelectedTags(tag, checked, setSelectedGenreTags)
                  }
                >
                  {tag}
                </CheckableTag>
              ))}
            </Space>
          </div>
          <div className="col-span-3">
            <p className="text-ps-normal-font-size font-semibold mb-5">
              {`Country of Origin`.toUpperCase()}
            </p>
            <Space size={[0, 8]} wrap>
              {/* {countryOriginData.map((tag) => (
                <CheckableTag
                  key={tag}
                  checked={selectedCountryOriginTags.includes(tag)}
                  onChange={(checked) =>
                    handleSelectedTags(
                      tag,
                      checked,
                      setSelectedCountryOriginTags
                    )
                  }
                >
                  {tag}
                </CheckableTag>
              ))} */}
            </Space>
          </div>
        </section>
      </Drawer>
    </>
  );
};
