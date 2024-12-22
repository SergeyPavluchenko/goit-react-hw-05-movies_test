// import { fetchSearchMovie } from 'components/MovieAPI/API';
// import ListMovies from 'components/ListMovies/ListMovies';
// import Spiner from 'components/Spiner/Spiner';
// import { useEffect, useState } from 'react';
// import toast from 'react-hot-toast';

// const Movies = () => {
//   const [search, setSearch] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (search !== '') {
//       const response = async () => {
//         setIsLoading(true);
//         try {
//           const { data } = await fetchSearchMovie(search);
//           toast.success(`We found ${data.results.length} movies`);
//           setMovies(data.results);
//           setIsLoading(false);
//         } catch (error) {
//           toast.error("This didn't work");
//         } finally {
//           setIsLoading(false);
//         }
//       };
//       response();
//     } else {
//       if (search === '') {
//         toast.error('This field empty');
//         return;
//       }
//       // setIsLoading(false);
//     }
//   }, [search]);

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     setSearch(evt.currentTarget.elements[0].value.toLowerCase().trim());
//   };

//   const resetForm = () => {
//     setSearch('');
//   };

//   return (
//     <>
//       <nav className="navbar bg-body-tertiary">
//         <div className="container-fluid d-flex justify-content-center ">
//           <form className="d-flex " role="search" onSubmit={handleSubmit}>
//             <input
//               className="form-control me-2 "
//               type="text"
//               placeholder="Search"
//               aria-label="Search"
//               autocomplete="on"
//             />
//             <button
//               className="btn btn-outline-success"
//               type="submit"
//               onClick={resetForm}
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </nav>
//       <div>
//         {isLoading && <Spiner />}
//         <ListMovies movies={movies} />
//       </div>
//     </>
//   );
// };

// export default MoviesSearch;

import Form from 'components/Form/Form';
import React, { useState } from 'react';

const Movies = () => {
  const [querySearsh, setQuerySearsh] = useState('');
  console.log(querySearsh);

  const queryString = query => {
    setQuerySearsh(query.toLowerCase().trim());
  };

  return (
    <div>
      <Form queryString={queryString} />
    </div>
  );
};

export default Movies;
