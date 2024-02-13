import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMovies } from 'api/MoviedbAPI';
import Searchbar from 'components/Searchbar';
import MoviesList from 'components/MoviesList';
import Loader from 'components/Loader';
import { BackButton } from './MoviesPage.styled';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location);

  const movieName = searchParams.get('query') ?? '';

  const handleSearch = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };

  useEffect(() => {
    async function searchMovie() {
      if (!movieName) {
        return;
      }

      setIsLoading(true);

      try {
        const response = await fetchMovies(movieName);
        if (!response.total_results) {
          return toast.info(`No movies with ${movieName} name`);
        }

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
      <Link to={backLinkRef.current.state?.from ?? '/'}>
        <BackButton>Back</BackButton>
      </Link>

      <Searchbar onSearch={handleSearch} />

      {isLoading && <Loader />}

      {movies.length > 0 && !isLoading && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
