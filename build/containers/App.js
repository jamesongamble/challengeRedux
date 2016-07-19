'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Main = require('../components/Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* CAUTION: When using the generators, this file is modified in some places.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *          This is done via AST traversal - Some of your formatting may be lost
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *          in the process - no functionality should be broken though.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *          This modifications only run once when the generator is invoked - if
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *          you edit them, they are not updated again.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/* Populated by react-webpack-redux:reducer */

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var actions = this.props.actions;

      return _react2.default.createElement(_Main2.default, { actions: actions });
    }
  }]);

  return App;
}(_react.Component);
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */


App.propTypes = {
  actions: _react.PropTypes.object.isRequired
};
function mapStateToProps() {
  /* Populated by react-webpack-redux:reducer */
  var props = {};
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  var actions = {};
  var actionMap = { actions: (0, _redux.bindActionCreators)(actions, dispatch) };
  return actionMap;
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);