import React from "react";
import Router from "react-router";

import express from 'express';
import favicon from 'serve-favicon';
import serialize from 'serialize-javascript';
import navigateAction from './App/shared/actions/navigate';

import stores from './config/stores';
import HtmlTemplate from './config/HtmlTemplate';

const debug = require('debug')('RootLevel');
const server = express();
const port = process.env.PORT || 8080;

// Serves statically pre-processed files
server.use('/public', express.static('./public'));
// server.use(favicon('./public/favicon.ico'));

// Dinamically processes the router and return a pre-rendered page
// with its server payload
server.use(function (req, res) {
  let context = stores.createContext();

  debug('Executing navigate action');

  Router.run(stores.getAppComponent(), req.path, function (Handler, state) {
    context.executeAction(navigateAction, state, function () {
      debug('Exposing context state');
      let serialized = serialize(stores.dehydrate(context));
      let exposed = `window.App=${serialized};`;

      debug('Rendering Application component into html');
      React.withContext(context.getComponentContext(), function () {
        let html = React.renderToStaticMarkup(
          <HtmlTemplate
            state={exposed}
            markup={React.renderToString(<Handler/>)}
          />
        );

        debug('Sending markup');
        res.send(html);
      });
    });
  });
});

server.listen(port);
console.log(`Listening on port ${port}`);

