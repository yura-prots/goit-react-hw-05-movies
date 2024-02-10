import { useEffect, useState } from 'react';

import { fetchTrending } from 'api/MoviedbAPI';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetchTrending();

        setMovies(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      <h2>Trending</h2>
    </div>
  );
};

export default Home;
