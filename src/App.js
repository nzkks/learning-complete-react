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

  deletePersonHandler = personIndex => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}

          {/* <Person
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
          /> */}
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
