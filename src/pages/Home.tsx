import GenreFilter from '../components/GenreFilter';
import MoviePage from '../movies/MoviePage';
 

const Home = () => {
  return (
    <div>
      <header className="logo">
        💣 <span>Bomb</span><span className="highlight">Movies</span>
      </header>
      <GenreFilter />
      <MoviePage />
    </div>
  );
};

export default Home;
