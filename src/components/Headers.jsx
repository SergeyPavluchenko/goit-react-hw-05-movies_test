import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const StyledLinkNav = styled.a`
  color: blue;
`;

const StyledLink = styled(NavLink)`
  color: black;

  &:hover {
    color: orange;
  }
`;

const Headers = () => {
  return (
    <div className="container-fluid">
      <StyledLinkNav
        className="navbar-brand"
        href="/goit-react-hw-05-movies_test"
      >
        Navbar
      </StyledLinkNav>
      <div className="">
        <ul>
          <li className="homeLink">
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li className="moviesLink">
            <StyledLink to="/movies">Movies</StyledLink>
          </li>
          <li className="favoriteLink">
            <StyledLink to="/favorite">Favorite</StyledLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
