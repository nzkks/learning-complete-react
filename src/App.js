import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, This is a React app</h1>
        <p>This is really working!</p>
        <Person name="Shan" age="32" />
        <Person name="Maha" age="25" />
        <Person name="Rish" age="14">
          My Hobbies: Drawing
        </Person>
        <Person name="Dars" age="9" />
      </div>
    );

    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', 'null', 'Hi, This is a React app!!!')
    // );
  }
}

export default App;
