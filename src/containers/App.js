import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Dashboard from '../components/Dashboard/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // this.state = {
    //   persons: [
    //     { id: 'fgftgh', name: 'Shan', age: 32 },
    //     { id: 'ohlibu', name: 'Maha', age: 25 },
    //     { id: 'hmjjds', name: 'Rish', age: 14 },
    //     { id: 'etrdgc', name: 'Dars', age: 9 }
    //   ],
    //   otherState: 'Some other value',
    //   showPersons: false
    // };
  }

  //* modern way of having state outside of constructor
  state = {
    persons: [
      { id: 'fgftgh', name: 'Shan', age: 32 },
      { id: 'ohlibu', name: 'Maha', age: 25 },
      { id: 'hmjjds', name: 'Rish', age: 14 },
      { id: 'etrdgc', name: 'Dars', age: 9 }
    ],
    otherState: 'Some other value',
    showPersons: false,
    showDashboard: true
  };

  //* rarely used lifecycle.
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  //! legacy lifecycle. Unsafe legacy lifecycles will not be called for components using new component APIs.
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons;
    // const persons = this.state.persons.slice(); // slice makes a copy of the array
    const persons = [...this.state.persons]; // ... spread operator
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={styles.app}>
        <button
          onClick={() => {
            this.setState({ showDashboard: false });
          }}
        >
          Remove Dashboard
        </button>

        {this.state.showDashboard ? (
          <Dashboard
            title={this.props.appTitle}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
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
