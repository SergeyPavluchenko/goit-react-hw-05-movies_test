import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'components/MovieAPI/API';
import noImage from '../Image/noImage.png';
import {
  CastBox,
  CastImg,
  CastItem,
  CastList,
  CastText,
} from './CreditsStyled';

const Credits = () => {
  const { filmId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const res = await fetchCredits(filmId);
        setCasts(res.data.cast);
        return res;
      } catch (error) {
        toast.error("This didn't work.");
      }
    };
    response();
  }, [filmId]);

  return (
    <CastBox>
      <h3>Credits:</h3>
      <CastList>
        {casts.map(({ id, profile_path, name }) => (
          <CastItem key={id}>
            <CastImg
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : `${noImage}`
              }
              alt={name}
            />
            <CastText>{name}</CastText>
          </CastItem>
        ))}
      </CastList>
    </CastBox>
  );
};

export default Credits;
