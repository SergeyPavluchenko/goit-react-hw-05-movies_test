import React from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { filmId } = useParams();

  return (
    <div>
      <h3>Reviews: {filmId}</h3>
    </div>
  );
};

export default Reviews;
