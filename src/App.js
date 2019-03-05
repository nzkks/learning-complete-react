import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Shan', age: 32 },
      { name: 'Maha', age: 25 },
      { name: 'Rish', age: 14 },
      { name: 'Dars', age: 9 }
    ],
    otherState: 'Some other value',
    showPersons: false
  };

  switchNameHandler = newName => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Max';

    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Maha', age: 26 },
        { name: 'Rish', age: 14 },
        { name: 'Darsh', age: 9 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: 'Shan', age: 32 },
        { name: event.target.value, age: 25 },
        { name: 'Rish', age: 14 },
        { name: 'Darsh', age: 9 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={this.switchNameHandler.bind(this, 'Shantho')} // recommended
            changed={this.nameChangeHandler}
          >
            My Hobbies: Drawing
          </Person>
          <Person
            name={this.state.persons[3].name}
            age={this.state.persons[3].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, This is a React app</h1>
        <p>This is really working!</p>
        <button style={btnStyle} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>

        {persons}
      </div>
    );
  }

  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h1', 'null', 'Hi, This is a React app!!!')
  // );
}

export default App;
