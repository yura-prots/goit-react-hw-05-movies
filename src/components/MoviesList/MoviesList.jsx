import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(({ id, title }) => {
          if (title) {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title}</Link>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </>
  );
};

export default MoviesList;
