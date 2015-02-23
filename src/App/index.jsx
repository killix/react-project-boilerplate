import React from 'react';
import Fluxible from "fluxible";
import { RouteHandler } from 'react-router';

import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

import ApplicationStore from "stores/ApplicationStore";

export default React.createClass({
  mixins: [Fluxible.Mixin],

  statics: {
    storeListeners: [ApplicationStore]
  },

  getInitialState() {
    return this.getStore(ApplicationStore).getState();
  },

  onChange() {
    var state = this.getStore(ApplicationStore).getState();
    this.setState(state);
  },

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
