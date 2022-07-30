import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

const Home = lazy(() =>
  import('pages/HomePage' /* webpackChunkName: "home-page" */)
);
const Movies = lazy(() =>
  import('pages/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    'pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-detalis-page" */
  )
);
const Cast = lazy(() =>
  import('./Cast/Cast' /* webpackChunkName: "cast-page" */)
);
const Reviews = lazy(() =>
  import('./Reviews/Reviews' /* webpackChunkName: "reviews-page" */)
);

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading Films...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
