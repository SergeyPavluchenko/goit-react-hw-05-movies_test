import { fetchSearchMovie } from 'components/MovieAPI/API';
import ListMovies from 'components/ListMovies/ListMovies';
import Spiner from 'components/Spiner/Spiner';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    const response = async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchSearchMovie(movieName);
        setMovies(data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    response();
  }, [movieName]);

  const handleSubmit = evt => {
    evt.preventDefault();
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-center ">
          <form className="d-flex " role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2 "
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={movieName}
              onChange={e => updateQueryString(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div>
        {isLoading && <Spiner />}
        <ListMovies movies={movies} />
      </div>
    </>
  );
};

export default MoviesSearch;
