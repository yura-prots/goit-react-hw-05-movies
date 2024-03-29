import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a23f5de8750d4e18c3afb539dab409ad';

export const fetchTrending = async () => {
  const response = await axios({
    url: `${BASE_URL}trending/all/day?api_key=${API_KEY}`,
    method: 'get',
  });

  return response.data;
};

export const fetchMovies = async query => {
  const response = await axios({
    url: `${BASE_URL}search/movie?query=${query}&page=1&api_key=${API_KEY}`,
    method: 'get',
  });

  return response.data;
};

export const fetchMoviesDetails = async movieId => {
  const response = await axios({
    url: `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`,
    method: 'get',
  });

  return response.data;
};

export const fetchCast = async movieId => {
  const response = await axios({
    url: `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`,
    method: 'get',
  });

  return response.data;
};

export const fetchReviews = async movieId => {
  const response = await axios({
    url: `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`,
    method: 'get',
  });

  return response.data;
};
