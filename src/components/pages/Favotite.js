import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

const Favotite = () => {
  return (
    <>
      <div>
        <h2>Favorite films</h2>
      </div>
      {/* <div>
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
      </div> */}
    </>
  );
};

export default Favotite;
