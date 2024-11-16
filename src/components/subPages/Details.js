import React from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { filmId } = useParams();
  return (
    <div>
      <h3>Details: {filmId}</h3>
    </div>
  );
};

export default Details;
