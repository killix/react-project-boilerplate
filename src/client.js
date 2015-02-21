import Router from 'react-router';
import routes from './config/routes';
import renderer from './config/clientRenderer';
import a11y from 'react-a11y';
let router;

function startUpRouter(routes) {
  let router = Router.create({
    routes: routes
  });

  router.run(renderer);
  return router;
}

if (process.env.NODE_ENV === 'development') {
  a11y();
  module.hot.accept('./config/routes', function () {
    routes = require('./config/routes');
    router.teardown();
    router = startUpRouter(routes);
  });
}

router = startUpRouter(routes);
