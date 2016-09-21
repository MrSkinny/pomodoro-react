import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header title="Pomo!" />
        <Clock />
      </div>
    );
  }
}

export default App;
