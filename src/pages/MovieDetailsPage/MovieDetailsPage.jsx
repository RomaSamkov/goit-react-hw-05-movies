import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from 'services/MovieAPI';
import { toast } from 'react-toastify';
import {
  AdditionalInformation,
  ButtonGoBack,
  FilmInfo,
  MovieContainer,
  MovieImg,
  StyledLink,
} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    (async () => {
      try {
        api.getMovieDetails(movieId).then(data => setMovie(data));
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, [movieId]);

  const onGoBack = () => {
    navigate(location.state?.from || '/');
  };

  return (
    <div>
      {movie && (
        <>
          <ButtonGoBack type="button" onClick={onGoBack}>
            Go Back
          </ButtonGoBack>
          <MovieContainer>
            <MovieImg
              width="300"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
            <FilmInfo>
              <h2>
                {`${movie.original_title} (${movie.release_date.slice(0, 4)})`}{' '}
              </h2>
              <h3>User score</h3>
              <p>{`${movie.vote_average * 10}%`}</p>
              <h3>Owerview:</h3>
              <p>{movie.overview}</p>
              <ul>
                <h3>Genres:</h3>
                {movie.genres.map(ganre => (
                  <li key={ganre.id}>{ganre.name}</li>
                ))}
              </ul>
            </FilmInfo>
          </MovieContainer>
          <AdditionalInformation>
            <h2>Additional Information</h2>
            <StyledLink to="cast" state={location.state}>
              Cast
            </StyledLink>
            <StyledLink to="reviews" state={location.state}>
              Reviews
            </StyledLink>
          </AdditionalInformation>
          <Outlet context={movieId} />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
