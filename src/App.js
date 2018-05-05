import React, { Component } from 'react';
import logo from './logo.svg';
import lashunta from './lashunta.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={lashunta} className="App-logo" alt="logo" />
          <h1 className="App-title">The Lagunta App</h1>
        </header>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
