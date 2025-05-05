import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const apiKey = '0106ec3f8021fc65a3f33d0203cb667d'; 


export const getGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${apiKey}&language=en-US`);
  return response.data.genres;
};

export const getMovies = async (page: number) => {
  const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${apiKey}&language=en-US&page=${page}`);
  return response.data.results;
};

export const searchMovies = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
  return response.data.results;
};

export const getMoviesByGenre = async (genreId: number, page = 1) => {
  const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genreId}&page=${page}`);
  return response.data.results;
};
