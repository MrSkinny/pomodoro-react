import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SmallClockTime from './SmallClockTime';
import { incrementStartClockTime, decrementStartClockTime } from '../actions';

const propTypes = {
  startBreakTime: PropTypes.number.isRequired,
  startTimerTime: PropTypes.number.isRequired,
  incrementStartClockTime: PropTypes.func.isRequired,
  decrementStartClockTime: PropTypes.func.isRequired
};

function onClockChange (clockType, dispatchAction) {
  dispatchAction(clockType);
}

function TimeSelection ({ startBreakTime, startTimerTime, incrementStartClockTime, decrementStartClockTime }) {
  return (
    <section id="timeSelection">
      <div className="col-xs-12 cold-md-12">
        <p><span>Break Time</span><span>Session Time</span></p>

        <button onClick={() => onClockChange('startBreakTime', decrementStartClockTime)} id="minusBreak" className="timeControl">-</button>
        <SmallClockTime time={startBreakTime} elementId="breakTime" />
        <button onClick={() => onClockChange('startBreakTime', incrementStartClockTime)} id="plusBreak" className="timeControl">+</button>

        <button onClick={() => onClockChange('startTimerTime', decrementStartClockTime)} id="minusTimer" className="timeControl">-</button>
        <SmallClockTime time={startTimerTime} elementId="timerTime" />
        <button onClick={() => onClockChange('startTimerTime', incrementStartClockTime)} id="plusTimer" className="timeControl">+</button>
      </div>
    </section>
  );
}

TimeSelection.propTypes = propTypes;

export default connect(
  ({ startBreakTime, startTimerTime }) => ({ startBreakTime, startTimerTime }),
  { incrementStartClockTime, decrementStartClockTime }
)(TimeSelection);
