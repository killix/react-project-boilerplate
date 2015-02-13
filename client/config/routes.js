import React from 'react';
import Router from 'react-router';
const {DefaultRoute, Route, NotFoundRoute} = Router;

import App from 'Application';
import HomePage from 'Application/screens/HomePage';
import NotFoundPage from 'Application/screens/NotFoundPage';

export default (
  <Route handler={App} path="/">
    <DefaultRoute name="home" handler={HomePage} />
    <NotFoundRoute name="not-found" handler={NotFoundPage} />
  </Route>
);
