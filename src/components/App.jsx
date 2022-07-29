import Home from 'pages/HomePage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import Movies from 'pages/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import Navigation from './Navigation/Navigation';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId/*" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
