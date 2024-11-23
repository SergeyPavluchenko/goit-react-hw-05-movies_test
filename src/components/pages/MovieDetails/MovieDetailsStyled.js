const { default: styled } = require('styled-components');

export const MovieBlock = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

export const MovieImgStyled = styled.img`
  border-radius: 5px;
  margin-left: 10px;
`;

export const MovieInfoBlock = styled.div`
  margin-left: 10px;
`;

export const LinkBlock = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  padding-top: 16px;
`;

export const MovieDetailsBlock = styled.div`
  margin-bottom: 40px;
`;
export const BtnBack = styled.button`
  display: flex;
  align-items: center;
`;
