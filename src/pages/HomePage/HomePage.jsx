import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { fetchTrending } from 'api/MoviedbAPI';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      setIsLoading(true);

      try {
        const response = await fetchTrending();

        setTrendingMovies(response.results);
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

      {isLoading && <Loader />}

      {trendingMovies.length > 0 && !isLoading && (
        <MoviesList movies={trendingMovies} />
      )}
    </>
  );
};

export default HomePage;
