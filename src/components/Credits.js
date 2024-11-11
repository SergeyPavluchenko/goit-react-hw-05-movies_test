import React from 'react';
import { useParams } from 'react-router-dom';

const Credits = () => {
  const { filmId } = useParams();

  return (
    <div>
      <h3>Credits: {filmId}</h3>
    </div>
  );
};

export default Credits;
