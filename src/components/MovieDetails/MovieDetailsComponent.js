import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import noImage from '../Image/noImage.png';

import {
  LinkBlock,
  MovieBlock,
  MovieDetailsBlock,
  MovieImgStyled,
  MovieInfoBlock,
} from './MovieDetailsStyled';

const MovieDetailsComponent = ({ movie, prodactCompany, genres }) => {
  const { title, release_date, overview, poster_path, vote_average } = movie;
  return (
    <div>
      <MovieDetailsBlock>
        <MovieBlock>
          <div>
            <MovieImgStyled
              src={
                poster_path !== null
                  ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                  : `${noImage}`
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
            <h4>Rating:</h4>
            <p>{vote_average}</p>
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
      </MovieDetailsBlock>
    </div>
  );
};

export default MovieDetailsComponent;
