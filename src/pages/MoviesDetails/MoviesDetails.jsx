import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { fetchMoviesDetails } from 'api/MoviedbAPI';

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

      {isLoading && (
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}

      {movieDetails.title}
    </>
  );
};

export default MoviesDetailsPage;
