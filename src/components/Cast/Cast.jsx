import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from 'services/MovieAPI';
import { CastContainer } from './Cast.styled';

const Cast = () => {
  const movieId = useOutletContext();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    api.getMovieCast(movieId).then(data => setCasts(data.cast));
  }, [movieId]);

  return (
    <CastContainer>
      {casts.map(cast => (
        <li key={cast.id}>
          {cast.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
              alt={cast.name}
              height="180"
              width="180"
            />
          ) : (
            <p></p>
          )}

          <p>{cast.name}</p>
        </li>
      ))}
    </CastContainer>
  );
};

export default Cast;
