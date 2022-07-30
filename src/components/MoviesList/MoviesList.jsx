import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Film, FilmsList, FilmTitle, ImgMovieList } from './MoviesList.styled';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <FilmsList>
      {films.map(film => (
        <Film key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            <ImgMovieList
              width="250"
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.original_title}
            />
            <FilmTitle>{film.original_title}</FilmTitle>
          </Link>
        </Film>
      ))}
    </FilmsList>
  );
};

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MoviesList;
