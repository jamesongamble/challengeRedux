'use strict';

var redux = require('redux');
var reducers = require('../reducers');

module.exports = function (initialState) {
  var store = redux.createStore(reducers, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', function () {
      var nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};