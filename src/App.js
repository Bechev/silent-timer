import React, { Component } from 'react';
import Home from './containers/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Welcome to Silent-timer.com</h1>
      <div><Home/></div>
      </div>
    );
  }
}

export default App;
