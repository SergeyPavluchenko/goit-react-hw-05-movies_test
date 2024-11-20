import { fetchTrendingMovieDetails } from 'components/API';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import {
  LinkBlock,
  MovieBlock,
  MovieImgStyled,
  MovieInfoBlock,
} from './MovieDetailsStyled';

const MovieDetails = () => {
  const { filmId } = useParams();
  const [movie, setMovie] = useState([]);
  const [prodactCompany, setProdactCompany] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const res = await fetchTrendingMovieDetails(filmId);
        setMovie(res);
        setProdactCompany(res.production_companies);
        setGenres(res.genres);
        return res;
      } catch (error) {}
    };
    response();
  }, [filmId]);

  console.log(movie);
  const { title, release_date, overview, poster_path } = movie;

  return (
    <>
      <MovieBlock>
        <div>
          <MovieImgStyled
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : `No Image 🤷‍♂️`
            }
            alt="title"
            width={300}
          />
        </div>

        <MovieInfoBlock>
          <h2>Details:{title}</h2>
          <br />
          <h4>Release Data: {release_date}</h4>
          <br />
          <h4>Genres: </h4>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
          <br />
          <h4>Production Companies: </h4>
          <p>{prodactCompany.map(company => company.name)}</p>
          <br />
          <h4>Overview:</h4>
          <p>{overview}</p>
        </MovieInfoBlock>
      </MovieBlock>
      <LinkBlock>
        <li>
          <Link to="credits">Credits</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </LinkBlock>
      <Outlet />
    </>
  );
};

export default MovieDetails;

// 'https://api.themoviedb.org/3/movie/movie_id?language=en-US';
