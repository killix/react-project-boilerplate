import React from 'react';
import navigateAction from '../App/shared/actions/navigate';


let firstRender = true;
let mountNode = window.document.body;
const debug = require('debug')('RootLevel');

export default function render(context, Handler, RouterState) {
  if (firstRender) {
    /*
     Don't call the action on the first render on top of the server rehydration
     Otherwise there is a race condition where the action gets executed before
     render has been called, which can cause the checksum to fail.
    */
    debug('React Rendering');
    React.withContext(context.getComponentContext(), function () {
      React.render(<Handler />, mountNode, function () {
        debug('React Rendered');
      });
    });
    firstRender = false;
  } else {
    debug('Route changed, dispatching action…');
    context.executeAction(navigateAction, RouterState, function () {
      debug('React Rendering…');
      React.withContext(context.getComponentContext(), function () {
        React.render(<Handler />, mountNode, function () {
          debug('React Rendered');
        });
      });
    });
  }
}
