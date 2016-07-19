import qwest from 'qwest'
import { toastr } from 'react-redux-toastr'
import _ from 'lodash'
import { push } from 'react-router-redux'

export const SCHEDULE_ALARM = 'SCHEDULE_ALARM'

// ------------------------------------
// Actions
// ------------------------------------

// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.

export function scheduleAlarm (clockData): Action {
  const normalizedClockData = {}
  _.forEach(clockData, (value, key) => {
    const normalizedString = value.split(' ').join('+')
    normalizedClockData[key] = normalizedString
  })
  console.log(normalizedClockData)

  qwest.get(`/api/users/distance`)
    .then((xhr, response) => {
      console.log(response);
      // console.log(response.rows[0].elements[0].duration.text);
      resolve()
    })
  return {
    type: SCHEDULE_ALARM,
    payload: clockData
  }
}

export const actions = {
  scheduleAlarm,
}
