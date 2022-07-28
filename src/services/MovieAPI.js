import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'f534638cb3304b9759e126ecf8f1bc28';

async function getTrendingMovies() {
  const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  return response.data.results;
}

async function getSearchMovies(query) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response;
}

async function getMovieDetails(movie_id) {
  const response = await axios.get(`/movie/${movie_id}?api_key=${API_KEY}`);
  return response.data;
}

async function getMovieCast(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return response;
}

async function getMovieReviews(movie_id) {
  const response = await axios.get(
    `/movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
  return response;
}

const api = {
  getTrendingMovies,
  getSearchMovies,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};

export default api;

getSearchMovies.propTypes = {
  query: PropTypes.string.isRequired,
};

getMovieDetails.propTypes = {
  movie_id: PropTypes.number.isRequired,
};

getMovieCast.propTypes = {
  movie_id: PropTypes.number.isRequired,
};

getMovieReviews.propTypes = {
  movie_id: PropTypes.number.isRequired,
};
