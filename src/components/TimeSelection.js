import React from 'react';

export default function () {
  return (
    <section id="timeSelection">
      <div className="col-xs-12 cold-md-12">
        <p><span>Break Time</span><span>Session Time</span></p>
        <button id="minusBreak" className="timeControl">-</button><span id="breakTime">5</span><button id="plusBreak" className="timeControl">+</button>
        <button id="minusTimer" className="timeControl">-</button><span id="timerTime">25</span><button id="plusTimer" className="timeControl">+</button>
      </div>
    </section>
  );
}
