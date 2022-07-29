import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import api from 'services/MovieAPI';
import { toast } from 'react-toastify';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        api.getTrendingMovies().then(films => {
          setMovies(films);
        });
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);

  return (
    <main>
      <h2>Trending Films</h2>
      {movies && <MoviesList films={movies} />}
    </main>
  );
};

export default Home;
