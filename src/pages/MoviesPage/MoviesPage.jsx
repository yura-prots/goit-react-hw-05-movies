import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { fetchMovies } from 'api/MoviedbAPI';
import Searchbar from 'components/Searchbar';
import MoviesList from 'components/MoviesList';

const MoviesPage = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    async function searchMovie() {
      if (!movieName) {
        return;
      }

      setIsLoading(true);

      try {
        const response = await fetchMovies(movieName);

        setMovies(response.results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    searchMovie();
  }, [movieName]);

  return (
    <>
      <Searchbar />

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

      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
