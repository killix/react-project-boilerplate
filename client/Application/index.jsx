import React from 'react';
import { RouteHandler } from 'react-router';

// For now, AppComponent inst to much, let's see
export default React.createClass({
  render() {
    return (
      <div className="ApplicationRoot">
        <RouteHandler/>
      </div>
    );
  }
});
