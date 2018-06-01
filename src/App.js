import React, { Component } from 'react';

import './App.css';

import Person from './Person/Person';

class App extends Component {
  state
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        <Person name="Taylor" age="21"/>
        <Person name="Leticia" age="21"/>
        <Person name="Caleb" age="0">My Hobbies: sucking my thumb</Person>
      </div>
    );
  }
}

export default App;
