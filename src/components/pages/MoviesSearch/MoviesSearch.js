// import React, { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';
// import { fetchSearchMovie } from 'components/API';
// import { Link, Outlet } from 'react-router-dom';

import { fetchSearchMovie } from 'components/API';
import ListMovies from 'components/ListMovies/ListMovies';
import Spiner from 'components/Spiner/Spiner';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const MoviesSearch = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (search !== '') {
      const response = async () => {
        setIsLoading(true);
        try {
          const { data } = await fetchSearchMovie(search);
          toast.success(`We found ${data.results.length} movies`);
          setMovies(data.results);
          setIsLoading(false);
        } catch (error) {
          toast.error("This didn't work");
        } finally {
          setIsLoading(false);
        }
      };
      response();
    } else {
      toast.error('This field empty');
    }
  }, [search]);

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearch(evt.currentTarget.elements[0].value.toLowerCase().trim());
  };

  const resetForm = () => {
    setSearch('');
  };

  console.log(movies);

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
              autoComplete="on"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={resetForm}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      {isLoading && <Spiner />}
      <ListMovies movies={movies} />
    </>
  );
};

export default MoviesSearch;
