import { useEffect } from 'react';
import { fetchGenres } from '../movies/MovieSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const GenreFilter = () => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector((state) => state.movies.genres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className="genre-buttons">
      <h3>Genres</h3>
      <div className="genre-button-group">
        {genres.map((genre) => (
          <button key={genre.id} className="genre-btn">
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
