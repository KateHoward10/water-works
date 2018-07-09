import React, { Component } from 'react';
import './App.css';
import WaterTracker from './WaterTracker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Water Works</h1>
        </header>
        <p className="App-intro">
          Keep track of your water intake, stay healthy and hydrated.
        </p>
        <WaterTracker  />
      </div>
    );
  }
}

export default App;
