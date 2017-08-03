import React, { Component } from 'react';
import './App.css';
import Component1 from './components/Component1'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Component1 message="Hello Form not world"/>
      </div>
    );
  }
}

export default App;
