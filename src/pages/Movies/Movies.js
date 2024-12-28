import { fetchSearchMovie } from 'components/MovieAPI/API';
import ListMovies from 'components/ListMovies/ListMovies';
import Spiner from 'components/Spiner/Spiner';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviesSearch = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (search !== '') {
      const response = async () => {
        setIsLoading(true);
        try {
          const { data } = await fetchSearchMovie(search);
          setMovies(data.results);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      };
      response();
    }
    return;
  }, [search]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.currentTarget.elements[0].value.toLowerCase().trim();
    setSearch(query);
  };

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-center ">
          <form className="d-flex " role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2 "
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={movieName}
              onChange={e => updateQueryString(e.target.value)}

              // autocomplete="on"
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              // onClick={resetForm}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      <div>
        {isLoading && <Spiner />}
        <ListMovies movies={movies} />
      </div>
    </>
  );
};

export default MoviesSearch;

// import Form from 'components/Form/Form';
// import ListMovies from 'components/ListMovies/ListMovies';
// import { fetchSearchMovie } from 'components/MovieAPI/API';
// import Spiner from 'components/Spiner/Spiner';
// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

// const Movies = () => {
//   const [movies, setMovies] = useState('');
//   const [search, setSearch] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieName = searchParams.get('query') ?? '';

//   const updateWordSearch = search.toLowerCase().trim();
//   useEffect(() => {
//     if (updateWordSearch !== '') {
//       const response = async () => {
//         try {
//           setIsLoading(true);
//           const res = await fetchSearchMovie(updateWordSearch);
//           console.log(res.data.results);
//           setMovies(res.data.results);
//         } catch (error) {
//           console.error(error);
//         } finally {
//           setIsLoading(false);
//         }
//       };
//       response();
//     }
//     return;
//   }, [updateWordSearch]);

//   const updateQueryString = query => {
//     const nextParams = query !== '' ? { query } : {};
//     setSearchParams(nextParams);
//     setSearch(query);
//   };

//   return (
//     <div>
//       <Form onChange={updateQueryString} value={movieName} />
//       {isLoading && <Spiner />}
//       {movies.length > 0 ? (
//         <ListMovies movies={movies} />
//       ) : (
//         <p>There are no movies with this request. Please, try again...</p>
//       )}
//     </div>
//   );
// };

// export default Movies;
