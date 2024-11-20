import { Route, Routes } from 'react-router-dom';
import { GlobalStyled } from '../GlobalStyled';
import Home from './pages/Home';
import Layout from './Layout/Layout';
import MoviesSearch from './pages/MoviesSearch';
import Favotite from './pages/Favotite';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import Credits from './Credits/Credits';
import Reviews from './Reviews/Reviews';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movie/:filmId" element={<MovieDetails />}>
            <Route path="credits" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="movies" element={<MoviesSearch />}>
            <Route path="movie/:filmId" element={<MovieDetails />}>
              <Route path="credits" element={<Credits />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="favorite" element={<Favotite />} />
        </Route>
      </Routes>
      <GlobalStyled />
    </>
  );
};
