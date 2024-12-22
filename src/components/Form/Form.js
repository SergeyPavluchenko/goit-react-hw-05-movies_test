import React, { useState } from 'react';

const Form = ({ queryString }) => {
  const [search, setSearch] = useState('');

  const handleChange = evt => {
    setSearch(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    queryString(search);
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
              value={search}
              onChange={handleChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Form;
