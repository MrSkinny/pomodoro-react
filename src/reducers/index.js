import update from 'react-addons-update';
import { INCREMENT_CLOCK_TIME, DECREMENT_CLOCK_TIME } from '../actions';

const INITIAL_STATE = {
  breakTime: 300,
  timerTime: 1500
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_CLOCK_TIME:
      return update(state, {
        [action.payload]: {
          $set: state[action.payload] + 60
        }
      });

    case DECREMENT_CLOCK_TIME:
      return update(state, {
        [action.payload]: {
          $set: state[action.payload] - 60
        }
      });

    default:
      return state;
  }
}
