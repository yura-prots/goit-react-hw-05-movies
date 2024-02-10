import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/Home';
import MoviesPage from 'pages/Movies';
import MoviesDetailsPage from 'pages/MoviesDetails';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
