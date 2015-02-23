let debug = require('debug');
debug.enable('*');

import Router from 'react-router';
import a11y from 'react-a11y';

import render from './config/render';
import stores from './config/stores';

let Location = Router.HistoryLocation;

debug=debug('RootLevel');
debug('rehydrating app');

stores.rehydrate(global.App, function (err, context) {
  if (err) throw err;

  debug('app rehydrated');

  render = render.bind(null, context);
  let router = Router.run(stores.getAppComponent(), Location, render);

  if (process.env.NODE_ENV === 'development') {
    a11y();
    module.hot.accept('./config/routes', function () {
      debug('routes reloaded');
      router.teardown();
      router = Router.run(require('./config/routes'), Location, render);
    });
  }
});

