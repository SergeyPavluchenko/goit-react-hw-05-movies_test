import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MoviesSearch = () => {
  const [search, setSearch] = useState('');

  const hendleChange = evt => {
    setSearch(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(search);
    resetForm();
  };

  const resetForm = () => {
    setSearch('');
  };
  return (
    <div>
      <h2>Search Movie</h2>
      <form className="searchInput" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search"
          name="search"
          onChange={hendleChange}
          value={search}
        />
        <button className="btnSearch" type="submit">
          Search
        </button>
      </form>

      <div>
        <ul>
          {['film-1', 'film-2', 'film-3', 'film-4', 'film-5'].map(film => {
            return (
              <li key={film}>
                <Link to={`${film}`}>{film}</Link>
              </li>
            );
          })}
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MoviesSearch;
