import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <ul>
        {['film-1', 'film-2', 'film-3', 'film-4', 'film-5'].map(film => {
          return (
            <li key={film}>
              <Link to={`${film}`}>{film}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
