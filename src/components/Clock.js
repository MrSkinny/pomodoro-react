import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TimeSelection from './TimeSelection';
import ClockDisplay from './ClockDisplay';

const propTypes = {
  currentSessionTime: PropTypes.number.isRequired
};

function Clock ({ currentSessionTime }) {
  console.log('clock rendering?');
  return (
    <div className="container">
      <article>
        <div className="row">
          <TimeSelection />
        </div>
        <div id="middle">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <section id="theClock">
                <ClockDisplay time={currentSessionTime} />
              </section>
              <section id="btnsTime">
                <button className="btn btn-lg buttons" id="start">Start</button><br />
                <button className="btn btn-lg buttons" id="pause">Pause</button><br />
                <button className="btn btn-lg buttons" id="reset">Reset</button><br />
              </section>
            </div>
          </div>
        </div>
      </article>
      <footer>
        <p>The app works in minutes.</p>
      </footer>
    </div>
  );
}

Clock.propTypes = propTypes;

export default connect(
  ({ currentSessionTime }) => ({ currentSessionTime })
)(Clock);
