import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from 'styles.module.css';

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav className={css.Navigation}>
          <Link className={css.Link} to="/" end="true">
            Home
          </Link>
          <Link className={css.Link} to="/movies">
            Search movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
