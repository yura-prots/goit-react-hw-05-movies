import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { fetchTrending } from 'api/MoviedbAPI';
import MoviesList from 'components/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);

      try {
        const response = await fetchTrending();

        setMovies(response.results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <>
      <h2>Trending</h2>

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

      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
