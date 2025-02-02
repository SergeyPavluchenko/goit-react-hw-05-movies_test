import { Route, Routes } from 'react-router-dom';
import { GlobalStyled } from '../GlobalStyled';
import { lazy } from 'react';

// import Home from '../pages/Home/Home';
// import Layout from './Layout/Layout';
// import Movies from '../pages/Movies/Movies';
// import Favotite from '../pages/Favorite/Favotite';
// import MovieDetails from './MovieDetails/MovieDetails';
// import Credits from './Credits/Credits';
// import Reviews from './Reviews/Reviews';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Favotite = lazy(() => import('../pages/Favorite/Favotite'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Credits = lazy(() => import('./Credits/Credits'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":filmId" element={<MovieDetails />}>
            <Route path="credits" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
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
