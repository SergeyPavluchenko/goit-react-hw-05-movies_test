import styled from 'styled-components';
const { Link } = require('react-router-dom');

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 15px 15px;
  margin-bottom: 40px;
  margin-left: 25px;
  margin-top: 20px;
  margin-right: 25px;
  justify-content: center;
`;

export const MovieLink = styled(Link)`
  width: 100%;
  flex-basis: calc(100% / 4 - 26px);
  padding: 5px;
  color: black;
  background: #fbf9fa3f;
  font-size: 18px;
  border-radius: 5px;
  text-decoration: none;
  border: 2px solid rgb(3, 3, 54);
`;

export const MovieImg = styled.img`
  width: 300px;
  height: 450px;
`;

export const MovieTItle = styled.h3`
  margin-bottom: 30px;
  margin-top: 30px;
  font-size: 15px;
  text-align: center;
`;
