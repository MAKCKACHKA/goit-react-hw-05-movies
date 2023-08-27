import { getData } from 'FetchApi';
import { Suspense, useEffect, useState } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import css from 'styles.module.css';

export const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref =
    location.state?.from ?? '/goit-react-hw-05-movies/movies';

  const [selMov, setSelMov] = useState([]);
  useEffect(() => {
    getData(`https://api.themoviedb.org/3/movie/${id}?language=en-US`)
      .then(data => {
        setSelMov(data);
      })
      .catch(err => console.error(err));
  }, [id]);
  return (
    <>
      <Link className={css.Back} to={backLinkHref}>
        Back
      </Link>
      {selMov.length === 0 && <p className={css.NotFound}>Reviews not found</p>}
      {selMov.length !== 0 && (
        <div>
          <div className={css.MovieWrapper}>
            {selMov.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${selMov.poster_path}`}
                alt={selMov.original_title}
                className={css.MoviePoster2}
              />
            ) : (
              <img
                src="https://th.bing.com/th/id/R.3e77a1db6bb25f0feb27c95e05a7bc57?rik=07AQ3YRhkD3z8A&pid=ImgRaw&r=0"
                alt={selMov.original_title}
                className={css.MoviePoster2}
              />
            )}
            <div className={css.MovieInformation}>
              <p className={css.MovieInfItem}>
                <b>Title: </b> {selMov.original_title}
              </p>
              <p className={css.MovieInfItem}>
                <b>Release date: </b> {selMov.release_date}
              </p>
              <p className={css.MovieInfItem}>
                <b>Overview:</b> {selMov.overview}
              </p>
              <ul className={(css.MovieInfItem, css.Genres)}>
                <b>Genres: </b>
                {selMov.genres &&
                  selMov.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
              </ul>
              <p className={css.MovieInfItem}>
                <b>User score:</b> {selMov.vote_average}
              </p>
            </div>
          </div>

          <ul className={css.LinkList}>
            <li>
              <Link
                to="credits"
                className={css.Link}
                state={{ from: backLinkHref }}
              >
                Cast
              </Link>
            </li>
            <li>
              <Link
                to="reviews"
                className={css.Link}
                state={{ from: backLinkHref }}
              >
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense
            fallback={<div className={css.NotFound}>Loading subpage...</div>}
          >
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};
export default Details;
