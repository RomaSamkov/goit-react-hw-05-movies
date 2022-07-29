import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from 'services/MovieAPI';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    api.getMovieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);

  const onGoBack = () => {
    navigate(location.state?.from || '/');
  };

  return (
    <div>
      {movie && (
        <>
          <button type="button" onClick={onGoBack}>
            Go Back
          </button>
          <div>
            <img
              width="300"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div>
              <h2>
                {`${movie.original_title} (${movie.release_date.slice(0, 4)})`}{' '}
              </h2>
              <p>{`User score: ${movie.vote_average * 10}%`}</p>
              <h3>Owerview:</h3>
              <p>{movie.overview}</p>
              <ul>
                {movie.genres.map(ganre => (
                  <li key={ganre.id}>{ganre.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2>Additional Information</h2>
            <NavLink to="cast" state={location.state}>
              Cast
            </NavLink>
            <NavLink to="reviews" state={location.state}>
              Reviews
            </NavLink>
          </div>
          <Outlet context={movieId} />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
