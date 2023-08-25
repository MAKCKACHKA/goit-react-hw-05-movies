import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout';
const Trending = lazy(() => import('../pages/Trending'));
const SearchMovie = lazy(() => import('../pages/Searchmovies'));
const Details = lazy(() => import('../pages/Moviedetails'));
const Credits = lazy(() => import('../pages/Moviecredits'));
const Reviews = lazy(() => import('../pages/Moviereviews '));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SharedLayout />}>
          <Route exact index element={<Trending />} />
          <Route exact path="movies" element={<SearchMovie />} />
          <Route exact path="movies/:id" element={<Details />}>
            <Route exact path="credits" element={<Credits />} />
            <Route exact path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
