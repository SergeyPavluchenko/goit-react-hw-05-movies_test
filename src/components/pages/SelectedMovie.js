import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const SelectedMovie = () => {
  const { filmId } = useParams();

  return (
    <>
      <div>Selected movie: {filmId}</div>
      <Link to="details">Details</Link>
      <Link to="credits">Credits</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};

export default SelectedMovie;
