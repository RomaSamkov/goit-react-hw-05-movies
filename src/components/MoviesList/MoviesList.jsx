import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`}>
            <p>{film.original_title}</p>
            <img
              width="100"
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.original_title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;