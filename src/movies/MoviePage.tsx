import { useEffect } from 'react';
import { fetchMovies } from './MovieSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const MoviePage = () => {
  const dispatch = useAppDispatch();
  const { movies, } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies(1));
  }, [dispatch]);

  return (
    <div className="container">
  <h2 className="section-title">Popular Movies</h2>
  <div className="movie-grid">
    {movies.map((movie) => (
      <div key={movie.id} className="movie-card">
        <p className="movie-title">{movie.title}</p>
        <p className="movie-release">Release: {movie.release_date}</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default MoviePage;
