import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMoviesDetails } from 'api/MoviedbAPI';
import Loader from 'components/Loader';

const MoviesDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMoviesDetails() {
      setIsLoading(true);

      try {
        const response = await fetchMoviesDetails(movieId);

        setMovieDetails(response);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMoviesDetails();
  }, [movieId]);

  return (
    <>
      <h2>Movies Details</h2>

      {isLoading && <Loader />}

      {movieDetails.title}

      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </>
  );
};

export default MoviesDetailsPage;
