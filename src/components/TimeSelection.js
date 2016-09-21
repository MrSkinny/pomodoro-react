import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import SmallClockTime from './SmallClockTime';

const propTypes = {
  breakTime: PropTypes.number.isRequired,
  timerTime: PropTypes.number.isRequired
};

function TimeSelection ({ breakTime, timerTime }) {
  return (
    <section id="timeSelection">
      <div className="col-xs-12 cold-md-12">
        <p><span>Break Time</span><span>Session Time</span></p>

        <button id="minusBreak" className="timeControl">-</button>
        <SmallClockTime time={breakTime} elementId="breakTime" />
        <button id="plusBreak" className="timeControl">+</button>

        <button id="minusTimer" className="timeControl">-</button>
        <SmallClockTime time={timerTime} elementId="timerTime" />
        <button id="plusTimer" className="timeControl">+</button>
      </div>
    </section>
  );
}

TimeSelection.propTypes = propTypes;

export default connect(
  ({ breakTime, timerTime }) => ({ breakTime, timerTime })
)(TimeSelection);
