import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader';
import { Container, Header, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default SharedLayout;
