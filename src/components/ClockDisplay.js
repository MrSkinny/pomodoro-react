import React, { PropTypes } from 'react';

const propTypes = {
  time: PropTypes.number.isRequired
};

function forceDoubleDigits (num) {
  return num < 10 ? `0${num}` : num;
}

function createTime (time) {
  return { minutes: parseInt(time / 60, 10), seconds: forceDoubleDigits(time % 60) };
}

export default function ClockDisplay({ time }) {
  const { minutes, seconds } = createTime(time);
  console.log(seconds);

  return (
    <div id="contentClock">
      <span id="time"><span id="minutes">{minutes}</span>: <span id="seconds">{seconds}</span></span><br />
      <span id="clasiff">Session</span>
    </div>
  );
}

ClockDisplay.propTypes = propTypes;
