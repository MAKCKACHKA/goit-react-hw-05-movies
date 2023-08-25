import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

// const SharedLayout = lazy(() => import('./SharedLayout'));
import SharedLayout from './SharedLayout';
const Trending = lazy(() => import('../pages/Trending'));
// import { Trending } from 'pages/Trending';
const SearchMovie = lazy(() => import('../pages/Searchmovies'));
// import { SearchMovie } from 'pages/Searchmovies';
const Details = lazy(() => import('../pages/Moviedetails'));
// import { Details } from 'pages/Moviedetails';
const Credits = lazy(() => import('../pages/Moviecredits'));
// import { Credits } from 'pages/Moviecredits';
const Reviews = lazy(() => import('../pages/Moviereviews '));
// import { Reviews } from 'pages/Moviereviews ';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Trending />} />
          <Route path="movies" element={<SearchMovie />} />
          <Route path="movies/:id" element={<Details />}>
            <Route path="credits" element={<Credits />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
