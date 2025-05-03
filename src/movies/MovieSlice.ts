import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MovieService } from './MovieService';

export const fetchGenres = createAsyncThunk('movies/fetchGenres', async () => {
  return await MovieService.getGenres();
});

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (page: number) => {
  return await MovieService.getMovies(page);
});

interface MovieState {
  genres: { id: number; name: string }[];
  movies: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: MovieState = {
  genres: [],
  movies: [],
  status: 'idle',
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      });
  },
});

export default movieSlice.reducer;
