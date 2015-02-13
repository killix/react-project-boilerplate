import React from 'react';
import Router from 'react-router';
import routes from './config/routes';
import renderer from './config/renderer';

let router;

function startUpRouter(routes) {
  let router = Router.create({
    routes: routes
  });

  router.run(renderer);
  return router;
}


if (module.hot) {
  module.hot.accept('./config/routes', function () {
    routes = require('./config/routes');
    router.teardown();
    router = startUpRouter(routes);
  });
}

router = startUpRouter(routes)
