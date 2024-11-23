import { fetchReviews } from 'components/API';
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
  console.log(reviews);
  return (
    <div>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map(({ id, author, author_details: { rating }, content }) => (
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
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
