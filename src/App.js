import React, { Component } from 'react';
import TimerComponent from './components/TimerComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='App'>
            Hey {this.props.name}!
            <TimerComponent />
        </div>
    );
  }
}

export default App;
