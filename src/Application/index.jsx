import React from 'react';
import { RouteHandler } from 'react-router';
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

// For now, AppComponent inst to much, let's see
export default React.createClass({
  render() {
    return (
      <div className="ApplicationRoot">
        <AppHeader />
        <RouteHandler/>
        <AppFooter />
      </div>
    );
  }
});
