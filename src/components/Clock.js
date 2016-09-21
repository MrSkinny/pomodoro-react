import React from 'react';

import TimeSelection from './TimeSelection';

export default function () {
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
                <div id="contentClock">
                  <span id="time"><span id="minutes">25</span>: <span id="seconds">00</span></span><br />
                  <span id="clasiff">Session</span>
                </div>
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
