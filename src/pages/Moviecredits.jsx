import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from 'styles.module.css';

const Credits = () => {
  const { id } = useParams();
  const [selMov, setSelMov] = useState([]);
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
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(data => {
        setSelMov(data.cast);
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  return (
    <>
      {selMov.length === 0 && <p className={css.NotFound}>Cast not found</p>}
      <ul className={css.CreditList}>
        {selMov.map(movie => (
          <li key={movie.id} className={css.CreditItem}>
            {movie.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.profile_path}`}
                alt={movie.name}
                className={css.CastImage}
              />
            ) : (
              <img
                src="https://www.fosterclub.org/sites/default/files/styles/bootstrap3_col3/public/no-image-available_0.png?itok=d1avJPOz"
                alt={movie.name}
                className={css.CastImage}
              />
            )}
            <p>{movie.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Credits;
