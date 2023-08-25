import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from 'styles.module.css';

export const Reviews = () => {
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
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(data => {
        setSelMov(data.results);
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <>
      {selMov.length === 0 && <p className={css.NotFound}>Reviews not found</p>}

      <ul className={css.ReviewList}>
        {selMov.map(movie => (
          <li key={movie.id} className={css.Review}>
            <p className={css.ReviewAutor}>Author: {movie.author}</p>
            <p className={css.ReviewComent}>Coment: {movie.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
