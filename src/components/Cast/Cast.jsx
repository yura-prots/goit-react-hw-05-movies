import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchCast } from 'api/MoviedbAPI';
import Loader from 'components/Loader';
import { Wrapper } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
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

    getMovieCast();
  }, [movieId]);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {cast.length > 0 && !isLoading && (
        <ul>
          {cast.map(({ id, name, profile_path, character }) => {
            return (
              <li key={id}>
                {profile_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={name}
                  />
                )}
                <b>{name}</b>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </Wrapper>
  );
};

export default Cast;
