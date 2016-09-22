import { store } from '../index';

const INCREMENT_START_CLOCK_TIME = 'INCREMENT_START_CLOCK_TIME';
const DECREMENT_START_CLOCK_TIME = 'DECREMENT_START_CLOCK_TIME';
const STOP_CLOCK = 'STOP_CLOCK';
const START_CLOCK = 'START_CLOCK';
const RESET_CLOCK = 'RESET_CLOCK';
const DECREMENT_CLOCK = 'DECREMENT_CLOCK';

const incrementStartClockTime = clockType => ({
  type: INCREMENT_START_CLOCK_TIME,
  payload: clockType
});

const decrementStartClockTime = clockType => ({
  type: DECREMENT_START_CLOCK_TIME,
  payload: clockType
});

const decrementClock = () => ({ type: DECREMENT_CLOCK });

const stopClock = () => {
  clearInterval(store.getState().intervalId);
  return { type: STOP_CLOCK };
};

const startClock = () => {
  if (store.getState().intervalId) return { type: START_CLOCK, payload: null };

  const intervalId = setInterval(() => {
    store.dispatch(decrementClock());
  }, 1000);

  return {
    type: START_CLOCK,
    payload: intervalId
  };
};

const resetClock = () => ({ type: RESET_CLOCK });

export {
  INCREMENT_START_CLOCK_TIME, DECREMENT_START_CLOCK_TIME, STOP_CLOCK, START_CLOCK, RESET_CLOCK, DECREMENT_CLOCK,
  incrementStartClockTime, decrementStartClockTime, stopClock, startClock, resetClock
};

