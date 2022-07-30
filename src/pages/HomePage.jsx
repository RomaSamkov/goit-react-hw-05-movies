import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import api from 'services/MovieAPI';
import { toast } from 'react-toastify';
import { Container, Title } from './HomePage.styled';

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
    <Container>
      <Title>Trending Films</Title>
      {movies && <MoviesList films={movies} />}
    </Container>
  );
};

export default Home;
