// 79c27b95cee402d8dc106d8509c1b5f2
// ce944bb11a9efac75ddff7e953af9ce2

import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'ce944bb11a9efac75ddff7e953af9ce2';

export const fetchTrending = async () => {
  const response = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};

export const fetchTrendingMovieDetails = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

// export default fetchTrendingMovieDetails
