import { Route, Routes } from 'react-router-dom';
import { GlobalStyled } from '../GlobalStyled';
import Home from '../pages/Home/Home';
import Layout from './Layout/Layout';
import Movies from '../pages/Movies/Movies';
import Favotite from '../pages/Favorite/Favotite';
import MovieDetails from './MovieDetails/MovieDetails';
import Credits from './Credits/Credits';
import Reviews from './Reviews/Reviews';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:filmId" element={<MovieDetails />}>
            <Route path="credits" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="favorite" element={<Favotite />} />
        </Route>
      </Routes>
      <GlobalStyled />
    </>
  );
};
