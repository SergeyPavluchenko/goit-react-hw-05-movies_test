import styled from 'styled-components';

export const CastBox = styled.div`
  padding: 20px;
`;
export const CastList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px 15px;
  list-style: none;
`;
export const CastItem = styled.li`
  width: 100%;
  height: 400px;
  flex-basis: calc(100% / 4 - 15px);
  padding: 5px;
  color: black;
  background: #fbf9fa3f;
  font-size: 16px;
  border-radius: 5px;
  list-style: none;
`;
export const CastImg = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;
export const CastText = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
