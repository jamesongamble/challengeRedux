import { SCHEDULE_ALARM } from '../actions/api'

const initialClockState = {
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

export default function scheduleAlarm(state = initialClockState, action) {
  switch (action.type) {
    case SCHEDULE_ALARM: {
      return Object.assign({}, state, { clockData: action.payload, triggerAlarm: action.payload.trigger })
    }
    default:
      return state
  }
}
