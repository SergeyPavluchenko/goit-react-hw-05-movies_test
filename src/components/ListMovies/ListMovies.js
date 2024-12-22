import React from 'react';
import { Link } from 'react-router-dom';

const ListMovies = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map(({ original_title, id }) => {
          return (
            <li key={id}>
              <Link to={`${id}`}>{original_title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListMovies;
