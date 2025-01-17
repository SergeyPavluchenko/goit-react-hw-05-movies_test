import { fetchTrending } from 'components/MovieAPI/API';
import Spiner from 'components/Spiner/Spiner';
import ListMovies from 'components/ListMovies/ListMovies';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const response = async () => {
      try {
        setIsLoading(true);
        const res = await fetchTrending();
        setMovies(res);
        setIsLoading(false);
      } catch (error) {
        toast.error('Щось пішло не так 🤷‍♂️');
      } finally {
        setIsLoading(false);
      }
    };
    response();
  }, []);

  return (
    <div>
      {isLoading && <Spiner />}
      <ListMovies state={{ from: location }} movies={movies} />
    </div>
  );
};

export default Home;
