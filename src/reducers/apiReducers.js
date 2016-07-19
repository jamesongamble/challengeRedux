import _ from 'lodash'
import { SCHEDULE_ALARM } from '../actions/api'

const initialTravelAuthState = {
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
}

export default function travelAuth(state = initialTravelAuthState, action) {
  switch (action.type) {
    case SCHEDULE_ALARM: {
      return Object.assign({}, state, { clockData: action.payload, triggerAlarm: action.payload.trigger })
    }
    default:
      return state
  }
}
