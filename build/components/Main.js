'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./fixed-data-table.css');
require('normalize.css/normalize.css');
require('../styles/App.css');
var FixedDataTable = require('fixed-data-table');
var React = require('react');
var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;
var Cell = FixedDataTable.Cell;


var TextCell = function TextCell(props) {
  if (!props.ads) {
    return React.createElement(
      Cell,
      props,
      props.state['ads_metrics']['rows'][props.rowIndex][props.col]
    );
  }
  return React.createElement(
    Cell,
    props,
    props.state['ads'][props.rowIndex]['name']
  );
};

var AppComponent = function (_React$Component) {
  _inherits(AppComponent, _React$Component);

  function AppComponent(props) {
    _classCallCheck(this, AppComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AppComponent).call(this, props));

    _this.state = {
      ads: [{
        'id': 1,
        'remote_id': '123',
        'name': '123',
        'status': 'ACTIVE'
      }, {
        'id': 2,
        'remote_id': '456',
        'name': '456',
        'status': 'ACTIVE'
      }, {
        'id': 3,
        'remote_id': '789',
        'name': '789',
        'status': 'ACTIVE'
      }, {
        'id': 4,
        'remote_id': '901',
        'name': '901',
        'status': 'ACTIVE'
      }],
      ads_metrics: {
        'column_names': ['impressions', 'reach', 'frequency', 'cpm', 'spend', 'ctr', 'cost_per_inline_link_click', 'actions:goal', 'actions:link_click', 'cost_per_action_type:cost_per_goal', 'actions:offsite_conversion'],
        'rows': [{
          'remote_id': '456',
          'impressions': '123',
          'reach': 123,
          'frequency': 1.0413449389302,
          'cpm': 12.30131445905,
          'spend': 182.49,
          'ctr': 0.87630603303,
          'cost_per_inline_link_click': 3.0415,
          'actions:goal': 3,
          'actions:link_click': 60,
          'cost_per_action_type:cost_per_goal': 60.83,
          'actions:offsite_conversion': 456
        }, {
          'remote_id': '123',
          'impressions': '123',
          'reach': 123,
          'frequency': 1.0413449389302,
          'cpm': 12.30131445905,
          'spend': 182.49,
          'ctr': 0.87630603303,
          'cost_per_inline_link_click': 3.0415,
          'actions:goal': 3,
          'actions:link_click': 60,
          'cost_per_action_type:cost_per_goal': 60.83,
          'actions:offsite_conversion': 123
        }, {
          'remote_id': '789',
          'impressions': '123',
          'reach': 123,
          'frequency': 1.0413449389302,
          'cpm': 12.30131445905,
          'spend': 182.49,
          'ctr': 0.87630603303,
          'cost_per_inline_link_click': 3.0415,
          'actions:goal': 3,
          'actions:link_click': 60,
          'cost_per_action_type:cost_per_goal': 60.83,
          'actions:offsite_conversion': 789
        }, {
          'remote_id': '901',
          'impressions': '123',
          'reach': 123,
          'frequency': 1.0413449389302,
          'cpm': 12.30131445905,
          'spend': 182.49,
          'ctr': 0.87630603303,
          'cost_per_inline_link_click': 3.0415,
          'actions:goal': 3,
          'actions:link_click': 60,
          'cost_per_action_type:cost_per_goal': 60.83,
          'actions:offsite_conversion': 901
        }]
      }
    };
    return _this;
  }

  _createClass(AppComponent, [{
    key: 'render',
    value: function render() {
      var state = this.state;
      var columnNames = this.state['ads_metrics']['column_names'];
      var adsNames = this.state['ads'];

      return React.createElement(
        Table,
        _extends({
          rowHeight: 30,
          headerHeight: 30,
          rowsCount: this.state.ads_metrics.rows.length,
          width: 1000,
          maxHeight: 500,
          className: 'flexcontainer',
          marginLeft: 'auto'
        }, this.props),
        React.createElement(Column, {
          fixed: true,
          header: React.createElement(
            Cell,
            null,
            'Ads Name'
          ),
          cell: React.createElement(TextCell, { ads: true, data: adsNames, col: 'companyName', state: state }),
          flexGrow: 1,
          width: 150
        }),
        columnNames && columnNames.map(function (item) {
          return React.createElement(Column, { key: item,
            header: React.createElement(
              Cell,
              null,
              item
            ),
            cell: React.createElement(TextCell, { data: columnNames, col: item, state: state }),
            width: 150
          });
        })
      );
    }
  }]);

  return AppComponent;
}(React.Component);

AppComponent.propTypes = {};

AppComponent.defaultProps = {};

exports.default = AppComponent;