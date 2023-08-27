import { getData } from 'FetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from 'styles.module.css';

export const Reviews = () => {
  const { id } = useParams();

  const [selMov, setSelMov] = useState([]);
  useEffect(() => {
    getData(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`)
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
