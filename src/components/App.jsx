import { Route, Routes } from 'react-router-dom';
import { GlobalStyled } from './subPages/GlobalStyled';
import Home from './pages/Home';
import Layout from './Layout/Layout';
import MoviesSearch from './pages/MoviesSearch';
import Favotite from './pages/Favotite';
import SelectedMovie from './pages/SelectedMovie';
import Details from './subPages/Details';
import Credits from './subPages/Credits';
import Reviews from './subPages/Reviews';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":filmId" element={<SelectedMovie />}>
            <Route path="details" element={<Details />} />
            <Route path="credits" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="movies" element={<MoviesSearch />}>
            <Route path=":filmId" element={<SelectedMovie />}>
              <Route path="details" element={<Details />} />
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
