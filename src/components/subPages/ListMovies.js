import React from 'react';
import { Link } from 'react-router-dom';

const ListMovies = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.title}`}>{movie.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListMovies;
