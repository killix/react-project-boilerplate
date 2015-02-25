import createStore from 'fluxible/utils/createStore';
import isFunction from "lodash.isfunction";


export default createStore({
  storeName: 'ApplicationStore',
  handlers: {
    'CHANGE_ROUTE': 'handleNavigate'
  },
  initialize: function () {
    this.title = 'Talk Process';
  },
  handleNavigate: function (routeCmd) {
    let newTitle = routeCmd.routes.reduce(function(title, route) {
      let slice = route.handler.title || route.title;
      if (isFunction(slice))
        slice = slice(route);

      slice = slice || "";
      if (!title)
        return slice;

      return slice + " | " + title;
    }, "");

    if (this.title === newTitle)
      return;

    this.title = newTitle;
    this.emitChange();
  },
  getState: function () {
    return {
      title: this.title
    };
  },
  dehydrate: function () {
    return this.getState();
  },
  rehydrate: function (state) {
    this.title = state.title;
  }
});
