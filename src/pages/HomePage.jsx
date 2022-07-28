import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import api from 'services/MovieAPI';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    api.getTrendingMovies().then(films => {
      setMovies(films);
    });
  }, []);

  return (
    <main>
      <h2>Trending Films</h2>
      {movies && <MoviesList films={movies} />}
    </main>
  );
};

export default Home;
