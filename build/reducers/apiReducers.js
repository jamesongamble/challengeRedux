'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = travelAuth;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _api = require('../actions/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialTravelAuthState = {
  counter: {
    value: 0
  },
  clockData: {
    startAddress: '',
    endAddress: '',
    padding: 0,
    getReadyTime: 0,
    arrivalTime: 0
  },
  userPref: {},
  statusFilter: [],
  travelAuths: [],
  travelAuth: {},
  checkall: false,
  checkedIds: [],
  modalData: { showModal: false }
};

function travelAuth() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialTravelAuthState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _api.SCHEDULE_ALARM:
      {
        return Object.assign({}, state, { clockData: action.payload, triggerAlarm: action.payload.trigger });
      }
    default:
      return state;
  }
}