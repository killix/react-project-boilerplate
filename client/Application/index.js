import React from 'react';
import { RouteHandler } from 'react-router';

import './app.styl';

// For now, AppComponent inst to much, let's see
export default React.createClass({
  render() {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});
