import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchMoviesDetails } from 'api/MoviedbAPI';
import Loader from 'components/Loader';
import Title from 'components/Title';
import { Wrapper, Img } from './MoviesDetailsPage.styled';

const MoviesDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location);

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

  const { poster_path, title, genres, overview, vote_average, release_date } =
    movieDetails;

  return (
    <>
      <Link to={backLinkRef.current.state?.from ?? '/'}>
        <button>Back</button>
      </Link>
      {isLoading && <Loader />}

      <Title title={'Movie Details'} />

      <Wrapper>
        <Img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
        />

        <div>
          {title && (
            <h2>
              {title} {release_date.substr(0, 4)}
            </h2>
          )}

          <p>User Score: {vote_average && Math.floor(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          {genres && <p>{genres.map(({ name }) => name).join(', ')}</p>}
        </div>
      </Wrapper>

      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>

      <Outlet />
    </>
  );
};

export default MoviesDetailsPage;
