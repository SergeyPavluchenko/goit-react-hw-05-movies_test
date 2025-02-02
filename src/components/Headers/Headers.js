// import { Loader } from 'components/Spiner/SpinerStyle';
// import React, { Suspense } from 'react';

import { NavLink } from 'react-router-dom';

const Headers = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid bg-47464B">
          <a className="navbar-brand" href="/goit-react-hw-05-movies_test">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link " aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/movies">
                Movies
              </NavLink>
              <NavLink className="nav-link" to="/favorite">
                Favorite
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      {/* <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </>
  );
};

export default Headers;
