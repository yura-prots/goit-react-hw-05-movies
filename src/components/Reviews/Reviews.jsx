import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchReviews } from 'api/MoviedbAPI';
import Loader from 'components/Loader';
import { Wrapper } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      setIsLoading(true);

      try {
        const response = await fetchReviews(movieId);

        setReviews(response.results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieReviews();
  }, [movieId]);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {reviews.length > 0 && !isLoading ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <b>Author: {author}</b>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don`t have any review for this movie.</p>
      )}
    </Wrapper>
  );
};

export default Reviews;
