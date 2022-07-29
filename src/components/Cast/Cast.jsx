import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from 'services/MovieAPI';

const Cast = () => {
  const movieId = useOutletContext();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    api.getMovieCast(movieId).then(data => setCasts(data.cast));
  }, [movieId]);

  return (
    <ul>
      {casts.map(cast => (
        <li key={cast.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt={cast.name}
            height="100"
          />
          <p>{cast.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
