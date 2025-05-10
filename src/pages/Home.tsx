import React, { Suspense } from 'react';

const Header = React.lazy(() => import('../components/Header'));
const GenreFilter = React.lazy(() => import('../components/GenreFilter'));
const MoviePage = React.lazy(() => import('../movies/MoviePage'));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<p className="loading">Loading...</p>}>
        <Header />
        <GenreFilter />
        <MoviePage />
      </Suspense>
    </div>
  );
};

export default React.memo(Home);
