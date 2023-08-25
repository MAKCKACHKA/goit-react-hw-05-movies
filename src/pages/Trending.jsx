import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from 'styles.module.css';

const Trending = () => {
  const [movies, setMov] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTJlYjhmY2Y4MjgxZDk2MzUxZDM3NzkwYjY4NDliMyIsInN1YiI6IjY0ZTY1MWI1MDZmOTg0MDBjYTU0M2IxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jl0g1qZXpWsls6NI2whWYvOEA3R_4Z8tBb5aQwqzmWs',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then(response => response.json())
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
