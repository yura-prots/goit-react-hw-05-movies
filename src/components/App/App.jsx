import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MoviesDetailsPage from 'pages/MoviesDetailsPage';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
