import GenreFilter from '../components/GenreFilter';
import MoviePage from '../movies/MoviePage';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Film App</h1>
      <GenreFilter />
      <MoviePage />
    </div>
  );
};

export default Home;
