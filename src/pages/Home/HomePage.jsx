import { useEffect, useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { fetchTrending } from 'api/MoviedbAPI';
import MoviesList from 'components/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    async function getMovies() {
      try {
        const response = await fetchTrending();

        setMovies(response.results);
      } catch (error) {
        console.log(error);
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

      {!isLoading && <MoviesList movies={movies} />}
    </>
  );
};

export default HomePage;
