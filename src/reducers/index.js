import update from 'react-addons-update';
import {
  INCREMENT_START_CLOCK_TIME,
  DECREMENT_START_CLOCK_TIME,
  START_CLOCK, STOP_CLOCK, RESET_CLOCK, DECREMENT_CLOCK } from '../actions';

/**
 * INCREMENT_START_CLOCK_TIME:
 * Payload: String - Key name on state to update
 *
 * DECREMENT_START_CLOCK_TIME:
 * Payload: String - Key name on state to update
 *
 */

const INITIAL_STATE = {
  startBreakTime: 300,
  startTimerTime: 1500,
  currentSessionTime: 1500,
  intervalId: null
};

function setStartClock (state, newTime, payload) {
  return payload === 'startTimerTime' ?
    update(state, { startTimerTime: { $set: newTime }, currentSessionTime: { $set: newTime } }) :
    update(state, { startBreakTime: { $set: newTime } });
}

export default function (state = INITIAL_STATE, action) {
  let newTime;

  switch (action.type) {
    case INCREMENT_START_CLOCK_TIME:
      newTime = state[action.payload] + 60;
      return setStartClock(state, newTime, action.payload);

    case DECREMENT_START_CLOCK_TIME:
      newTime = state[action.payload] - 60;
      return setStartClock(state, newTime, action.payload);

    case DECREMENT_CLOCK:
      return update(state, { currentSessionTime: { $set: state.currentSessionTime - 1 } });

    case START_CLOCK:
      console.log('reducer start');
      return update(state, { intervalId: { $set: action.payload } });

    case STOP_CLOCK:
      console.log('stop clock!');
      return update(state, { intervalId: { $set: null } });

    case RESET_CLOCK:
      console.log('reducer reset');
      return state;

    default:
      return state;
  }
}
