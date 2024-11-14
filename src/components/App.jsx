import { Route, Routes } from 'react-router-dom';
import { GlobalStyled } from './GlobalStyled';
import Home from './pages/Home';
import Layout from './Layout/Layout';
import MoviesSearch from './pages/MoviesSearch';
import Favotite from './pages/Favotite';
import SelectedMovie from './pages/SelectedMovie';
import Details from './Details';
import Credits from './Credits';
import Reviews from './Reviews';
import { useEffect } from 'react';
import fetchTrending from './API';

export const App = () => {
  useEffect(() => {
    const response = async () => {
      const res = await fetchTrending();
      console.log(res);
    };
    response();
  }, []);

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
