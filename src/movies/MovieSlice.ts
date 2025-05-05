import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getGenres, getMovies, searchMovies, getMoviesByGenre } from '../movies/MovieService';

export const fetchGenres = createAsyncThunk('movies/fetchGenres', async () => {
  return await getGenres();
});

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (page: number) => {
  return await getMovies(page);
});

export const fetchSearchResults = createAsyncThunk('movies/search', async (query: string) => {
  return await searchMovies(query);
});

export const fetchGenreMovies = createAsyncThunk(
  'movies/genre',
  async ({ genreId, page }: { genreId: number; page: number }) => {
    return await getMoviesByGenre(genreId, page);
  }
);

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    genres: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movies = action.payload;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(fetchGenreMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      });
  },
});

export default movieSlice.reducer;
