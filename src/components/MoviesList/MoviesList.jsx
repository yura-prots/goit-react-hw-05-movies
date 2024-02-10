const MoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(movie => {
          if (!movie.title) {
            return console.log('No Movies');
          }
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </>
  );
};

export default MoviesList;
