import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SmallClockTime from './SmallClockTime';
import { incrementClockTime, decrementClockTime } from '../actions';

const propTypes = {
  breakTime: PropTypes.number.isRequired,
  timerTime: PropTypes.number.isRequired,
  incrementClockTime: PropTypes.func.isRequired,
  decrementClockTime: PropTypes.func.isRequired
};

function onClockChange (clockType, dispatchAction) {
  dispatchAction(clockType);
}

function TimeSelection ({ breakTime, timerTime, incrementClockTime, decrementClockTime }) {
  return (
    <section id="timeSelection">
      <div className="col-xs-12 cold-md-12">
        <p><span>Break Time</span><span>Session Time</span></p>

        <button onClick={() => onClockChange('breakTime', decrementClockTime)} id="minusBreak" className="timeControl">-</button>
        <SmallClockTime time={breakTime} elementId="breakTime" />
        <button onClick={() => onClockChange('breakTime', incrementClockTime)} id="plusBreak" className="timeControl">+</button>

        <button onClick={() => onClockChange('timerTime', decrementClockTime)} id="minusTimer" className="timeControl">-</button>
        <SmallClockTime time={timerTime} elementId="timerTime" />
        <button onClick={() => onClockChange('timerTime', incrementClockTime)} id="plusTimer" className="timeControl">+</button>
      </div>
    </section>
  );
}

TimeSelection.propTypes = propTypes;

export default connect(
  ({ breakTime, timerTime }) => ({ breakTime, timerTime }),
  { incrementClockTime, decrementClockTime }
)(TimeSelection);
