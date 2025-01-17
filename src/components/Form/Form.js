// import React, { useState } from 'react';

const Form = ({ onChange, value }) => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-center ">
          <form className="d-flex " role="search">
            <input
              className="form-control me-2 "
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={value}
              onChange={e => onChange(e.target.value)}
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
