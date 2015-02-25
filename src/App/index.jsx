import React from 'react';
import Fluxible from "fluxible";
import { RouteHandler } from 'react-router';

import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

import ApplicationStore from "stores/ApplicationStore";

export default React.createClass({
  mixins: [Fluxible.Mixin],

  statics: {
    storeListeners: [ApplicationStore],
    title: "Application Name"
  },

  getInitialState() {
    return this.getStore(ApplicationStore).getState();
  },

  onChange() {
    var state = this.getStore(ApplicationStore).getState();
    this.setState(state);
  },

  componentDidMount() {
    window.document.title = this.state.title;
  },

  componentDidUpdate() {
    window.document.title = this.state.title;
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
