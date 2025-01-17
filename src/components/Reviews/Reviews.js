import { fetchReviews } from 'components/MovieAPI/API';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { List, TextStyle } from './ReviewsStyled';

const Reviews = () => {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const res = await fetchReviews(filmId);
        setReviews(res.data.results);
        return res;
      } catch (error) {
        toast.error("This didn't work.");
      }
    };
    response();
  }, [filmId]);

  const resultReviews = reviews.length;

  return (
    <>
      {resultReviews !== 0 ? (
        <div>
          <h3>Reviews:</h3>
          <ul>
            {reviews.map(
              ({ id, author, author_details: { rating }, content }) => (
                <List key={id}>
                  <p>
                    <TextStyle>Author: </TextStyle>
                    {author}
                  </p>
                  <p>
                    <TextStyle>Raiting:</TextStyle> {rating}{' '}
                  </p>
                  <p>
                    <p>
                      <TextStyle>Content:</TextStyle>{' '}
                    </p>
                    {content}
                  </p>
                </List>
              )
            )}
          </ul>
        </div>
      ) : (
        <h3>Reviews: no result</h3>
      )}
    </>
  );
};

export default Reviews;
