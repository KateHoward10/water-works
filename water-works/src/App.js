import React, { Component } from 'react';
import './App.css';
import WaterTracker from './WaterTracker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><span role="img" aria-label="tap emoji">🚰</span>  Water Works</h1>
          <p className="App-intro">
            Keep track of your water intake<br></br>Stay healthy and hydrated
          </p>
        </header>
        <WaterTracker  />
      </div>
    );
  }
}

export default App;
