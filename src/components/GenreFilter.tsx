import { useEffect, memo } from 'react';
import { fetchGenres, fetchGenreMovies } from '../movies/MovieSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const GenreFilter = () => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector((state) => state.movies.genres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const handleGenreClick = (genreId: number) => {
    dispatch(fetchGenreMovies({ genreId, page: 1 }));
  };

  return (
    <div className="genre-buttons">
      <h3>Genres</h3>
      <div className="genre-button-group">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className="genre-btn"
            onClick={() => handleGenreClick(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(GenreFilter);
