import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchTrendingMovieDetails } from 'components/MovieAPI/API';
import MovieDetailsComponent from 'components/MovieDetails/MovieDetailsComponent';
import Spiner from 'components/Spiner/Spiner';
import ButtonBack from 'components/Buttons/ButtonBack';

const MovieDetails = () => {
  const { filmId } = useParams();
  const [movie, setMovie] = useState([]);
  const [prodactCompany, setProdactCompany] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const response = async () => {
      try {
        setIsLoading(true);
        const res = await fetchTrendingMovieDetails(filmId);
        setMovie(res);
        setProdactCompany(res.production_companies);
        setGenres(res.genres);
        setIsLoading(false);
        return res;
      } catch (error) {
        toast.error("This didn't work.");
      }
    };
    response();
  }, [filmId]);

  return (
    <>
      <ButtonBack />
      {isLoading ? (
        <Spiner />
      ) : (
        <MovieDetailsComponent
          movie={movie}
          prodactCompany={prodactCompany}
          genres={genres}
        />
      )}
    </>
  );
};

export default MovieDetails;
