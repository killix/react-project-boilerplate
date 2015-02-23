import React from 'react';
import Router from 'react-router';
const {DefaultRoute, Route, NotFoundRoute} = Router;

import App from 'App';
import Home from '../App/screens/Home';
import NotFound from '../App/screens/NotFound';

if (process.env.NODE_ENV === "development") {
  require('./dev');
}

export default (
  <Route handler={App} path="/">
    <DefaultRoute name="home" handler={Home} />
    <NotFoundRoute name="not-found" handler={NotFound} />
  </Route>
);
