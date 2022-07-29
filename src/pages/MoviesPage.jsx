import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'services/MovieAPI';
import { toast } from 'react-toastify';

const Movies = () => {
  const [value, setValue] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    (async () => {
      try {
        query &&
          api.getSearchMovies(query).then(data => setFilms(data.results));
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, [query]);

  const onHandleChange = event => {
    setValue(event.target.value);
  };

  const onHandleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: value });
    setValue('');
  };

  return (
    <>
      <main>
        <form onSubmit={onHandleSubmit}>
          <input type="text" onChange={onHandleChange} value={value} />
          <button type="submit">Search</button>
        </form>
        {films && <MoviesList films={films} />}
      </main>
    </>
  );
};

export default Movies;
