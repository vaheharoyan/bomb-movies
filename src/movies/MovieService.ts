import axios from 'axios';

const apiKey = '0106ec3f8021fc65a3f33d0203cb667d'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export const MovieService = {
  async getGenres() {
    const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${apiKey}&language=en-US`);
    return response.data.genres;
  },

  async getMovies(page: number) {
    const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${apiKey}&language=en-US&page=${page}`);
    return response.data.results;
  }
};
