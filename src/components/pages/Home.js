import fetchTrending from 'components/API';
import Spiner from 'components/Spiner/Spiner';
import ListMovies from 'components/subPages/ListMovies';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <div>Home</div>
      {isLoading ? <Spiner /> : <ListMovies movies={movies} />}
    </div>
  );
};

export default Home;
