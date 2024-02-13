import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import SharedLayout from 'components/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('pages/MoviesDetailsPage'));

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
