import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <header>
                <h1 className="text-center">Time <i>ur</i> Time!</h1>
              </header>
            </div>
          </div>
        </div>
        <div className="container">
          <article>
            <div className="row">
              <section id="timeSelection">
                <div className="col-xs-12 cold-md-12">
                  <p><span>Break Time</span><span>Session Time</span></p>
                  <button id="minusBreak" className="timeControl">-</button><span id="breakTime">5</span><button id="plusBreak" className="timeControl">+</button>
                  <button id="minusTimer" className="timeControl">-</button><span id="timerTime">25</span><button id="plusTimer" className="timeControl">+</button>
                </div>
              </section>
            </div>
            <div id="middle">
              <div className="row">
                <div className="col-xs-12 col-md-12">
                  <section id="theClock">
                    <div id="contentClock">
                      <span id="time"><span id="minutes">25</span>:<span id="seconds">00</span></span><br />
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
      </div>
    );
  }
}

export default App;
