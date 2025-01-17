import { Outlet, useLocation } from 'react-router-dom';
import { MovieImg, MovieLink, MovieList, MovieTItle } from './ListMoviesStyled';
import noImage from '../Image/noImage.png';

const ListMovies = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <MovieList>
        {movies.map(({ original_title, id, poster_path }) => {
          return (
            <MovieLink key={id} to={`${id}`} state={{ from: location }}>
              <MovieImg
                src={
                  poster_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : `${noImage}`
                }
                alt={original_title}
              />
              <MovieTItle>{original_title}</MovieTItle>
            </MovieLink>
          );
        })}
      </MovieList>
      <Outlet />
    </>
  );
};

export default ListMovies;
