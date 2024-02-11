import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchCast } from 'api/MoviedbAPI';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMoviesCast() {
      setIsLoading(true);

      try {
        const response = await fetchCast(movieId);

        setCast(response.cast);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMoviesCast();
  }, [movieId]);

  return <>{movieId}</>;
};

export default Cast;
