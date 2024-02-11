import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchReviews } from 'api/MoviedbAPI';

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

  return <>{movieId}</>;
};

export default Reviews;
