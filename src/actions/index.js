const INCREMENT_START_CLOCK_TIME = 'INCREMENT_START_CLOCK_TIME';
const DECREMENT_START_CLOCK_TIME = 'DECREMENT_START_CLOCK_TIME';

const incrementStartClockTime = clockType => ({
  type: INCREMENT_START_CLOCK_TIME,
  payload: clockType
});

const decrementStartClockTime = clockType => ({
  type: DECREMENT_START_CLOCK_TIME,
  payload: clockType
});

export {
  INCREMENT_START_CLOCK_TIME, DECREMENT_START_CLOCK_TIME,
  incrementStartClockTime, decrementStartClockTime
};

