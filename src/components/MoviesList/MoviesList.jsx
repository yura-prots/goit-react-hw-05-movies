import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { List, Item, LinkEl, Card } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <List>
        {movies.map(({ id, title, poster_path }) => {
          if (title) {
            return (
              <Item key={id}>
                <LinkEl to={`/movies/${id}`} state={{ from: location }}>
                  <Card>
                    {poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                        alt={title}
                      />
                    ) : (
                      <p>No Poster</p>
                    )}
                    {title}
                  </Card>
                </LinkEl>
              </Item>
            );
          }
          return null;
        })}
      </List>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
