const INCREMENT_CLOCK_TIME = 'INCREMENT_CLOCK_TIME';
const DECREMENT_CLOCK_TIME = 'DECREMENT_CLOCK_TIME';

const incrementClockTime = clockType => ({
  type: INCREMENT_CLOCK_TIME,
  payload: clockType
});

const decrementClockTime = clockType => ({
  type: DECREMENT_CLOCK_TIME,
  payload: clockType
});

export {
  INCREMENT_CLOCK_TIME, DECREMENT_CLOCK_TIME,
  incrementClockTime, decrementClockTime
};

