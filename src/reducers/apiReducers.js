import { SCHEDULE_ALARM } from '../actions/api'

const initialData = {
  ads: {},
  ads_metrics: {}
}

export default function scheduleAlarm(state = initialData, action) {
  switch (action.type) {
    case ADS: {
      // return Object.assign({}, state, { clockData: action.payload, triggerAlarm: action.payload.trigger })
    }
    default:
      return state
  }
}
