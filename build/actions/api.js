'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.SCHEDULE_ALARM = undefined;
exports.scheduleAlarm = scheduleAlarm;

var _qwest = require('qwest');

var _qwest2 = _interopRequireDefault(_qwest);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _resolve = require('resolve');

var _resolve2 = _interopRequireDefault(_resolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SCHEDULE_ALARM = exports.SCHEDULE_ALARM = 'SCHEDULE_ALARM';

// ------------------------------------
// Actions
// ------------------------------------

// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.

function scheduleAlarm(clockData) {
  var normalizedClockData = {};
  _lodash2.default.forEach(clockData, function (value, key) {
    var normalizedString = value.split(' ').join('+');
    normalizedClockData[key] = normalizedString;
  });

  _qwest2.default.get('/api/users/distance').then(function (xhr, response) {
    console.log(response);
    (0, _resolve2.default)();
  });
  return {
    type: SCHEDULE_ALARM,
    payload: clockData
  };
}

var actions = exports.actions = {
  scheduleAlarm: scheduleAlarm
};