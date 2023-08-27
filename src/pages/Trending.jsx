import { getData } from 'FetchApi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from 'styles.module.css';

const Trending = () => {
  const [movies, setMov] = useState([]);

  useEffect(() => {
    getData('https://api.themoviedb.org/3/trending/movie/day?language=en-US')
      .then(data => setMov(data.results))
      .catch(err => console.error(err));
  }, []);

  const location = useLocation();

  return (
    <>
      <h1 className={css.Trendig}>Trendig today</h1>

      <ul className={css.MovieList}>
        {movies.map(movie => (
          <li key={movie.id} className={css.MovieItem}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.original_title}
                className={css.MoviePoster}
              />
              <p className={css.MovieTitle}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Trending;
