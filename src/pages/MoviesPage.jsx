import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'services/MovieAPI';
import { toast } from 'react-toastify';
import { Form, Input, SearchButton } from './MoviesPage.styled';
import { FaSearch } from 'react-icons/fa';

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
        <Form onSubmit={onHandleSubmit}>
          <Input
            type="text"
            placeholder="Enter film name..."
            onChange={onHandleChange}
            value={value}
          />
          <SearchButton type="submit">
            <FaSearch size={30}></FaSearch>Search
          </SearchButton>
        </Form>
        {films && <MoviesList films={films} />}
      </main>
    </>
  );
};

export default Movies;
