import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from 'services/MovieAPI';
import { ReviewsContainer } from './Reviews.styled';

const Reviews = () => {
  const movieId = useOutletContext();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.getMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return reviews.length !== 0 ? (
    <ReviewsContainer>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ReviewsContainer>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
