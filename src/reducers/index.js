import update from 'react-addons-update';
import { INCREMENT_START_CLOCK_TIME, DECREMENT_START_CLOCK_TIME } from '../actions';

const INITIAL_STATE = {
  startBreakTime: 300,
  startTimerTime: 1500,
  currentSessionTime: 1500
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_START_CLOCK_TIME:
      return update(state, {
        [action.payload]: {
          $set: state[action.payload] + 60
        }
      });

    case DECREMENT_START_CLOCK_TIME:
      return update(state, {
        [action.payload]: {
          $set: state[action.payload] - 60
        }
      });

    default:
      return state;
  }
}
