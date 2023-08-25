import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from 'styles.module.css';

const SearchMovie = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMov] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [submit, setSubmit] = useState(false);

  const movieTitle = searchParams.get('title') ?? '';

  const updateQueryString = title => {
    const nextParams = title !== '' ? { title } : {};
    setSearchParams(nextParams);
  };

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const resetPage = () => {
    setPage(1);
  };

  const plusPage = () => {
    setPage(page + 1);
  };

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
      `https://api.themoviedb.org/3/search/movie?query=${movieTitle}&include_adult=false&language=en-US&page=${page}`,
      options
    )
      .then(response => response.json())
      .then(data => {
        setMov(data.results);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [movieTitle, page]);

  const handleSubmit = e => {
    e.preventDefault();
    setValue('');
    resetPage();
    if ((value !== '' && movies.length < 1) || movies === []) {
      setIsLoading(true);
    }
    updateQueryString(value);
    setSubmit(true);
  };

  const location = useLocation();

  return (
    <>
      <div className={css.Searchbar}>
        <form role="search" className={css.SearchForm} onSubmit={handleSubmit}>
          <button className={css.SearchFormButton} type="submit">
            <span className={css.SearchFormButtonLabel}>&#9740;</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            onChange={handleChange}
            value={value}
          />
        </form>
      </div>
      {isLoading ? (
        <p className={css.NotFound}> isLoading... </p>
      ) : (
        <div>
          {submit && movies.length < 1 ? (
            <p className={css.NotFound}>Not Found</p>
          ) : (
            <div className={css.MovieListWrapper}>
              <ul className={css.MovieList}>
                {movies.map(movie => (
                  <li key={movie.id} className={css.MovieItem}>
                    <Link to={`${movie.id}`} state={{ from: location }}>
                      {movie.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                          alt={movie.original_title}
                          className={css.MoviePoster}
                        />
                      ) : (
                        <img
                          src="https://th.bing.com/th/id/R.3e77a1db6bb25f0feb27c95e05a7bc57?rik=07AQ3YRhkD3z8A&pid=ImgRaw&r=0"
                          alt={movie.original_title}
                          className={css.MoviePoster}
                        />
                      )}
                      <p className={css.MovieTitle}>{movie.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
              {submit && (
                <button className={css.Button} type="button" onClick={plusPage}>
                  Next page
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default SearchMovie;
