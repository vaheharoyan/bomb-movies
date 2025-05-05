import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import {
  fetchGenres,
  fetchMovies,
  fetchSearchResults,
} from '../movies/MovieSlice';

interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
}

const MoviePage = () => {
  const dispatch = useAppDispatch();
  const { movies, isLoading } = useAppSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchMovies(1));
  }, [dispatch]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem('search') as HTMLInputElement;
    const query = input.value.trim();
    if (query) {
      dispatch(fetchSearchResults(query));
    }
  };

  return (
    <div className="container">
      <h2 className="section-title">Movie Explorer</h2>

      <form onSubmit={handleSearch} className="search-bar">
       <input type="text" name="search" placeholder="Search movies..." className="search-input" />
       <button type="submit" className="search-button">Search</button>
      </form>


      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="movie-grid">
          {(movies as Movie[]).map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : 'https://via.placeholder.com/300x450?text=No+Image'
                }
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <p className="movie-title">{movie.title}</p>
                <p className="movie-release">Release: {movie.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviePage;
