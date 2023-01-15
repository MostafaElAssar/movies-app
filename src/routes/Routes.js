import React from 'react';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Movie from '../pages/Movie';

const Routes = ({ wishlist }) => {
  return (
    <ReactRouterRoutes>
      <Route
        path="/movies/:genre/:id"
        element={<Movie wishlist={wishlist} />}
      />
      <Route path="/" element={<Home />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
