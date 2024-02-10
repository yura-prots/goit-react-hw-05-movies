import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMoviesDetails } from 'api/MoviedbAPI';

const MoviesDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    async function getMoviesDetails() {
      try {
        const response = await fetchMoviesDetails(movieId);

        setMovieDetails(response);
      } catch (error) {
        toast.error(error.message);
      }
    }

    getMoviesDetails();
  }, [movieId]);

  return (
    <>
      <h2>Movies Details</h2>
      {movieDetails.title}
    </>
  );
};

export default MoviesDetailsPage;
