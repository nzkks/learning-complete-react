import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Dashboard from '../components/Dashboard/Dashboard';
// import WithClass from '../hoc/WithClass';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';

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
    showDashboard: true,
    changeCounter: 0,
    authenticated: false
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

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
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

  loginHandler = () => {
    this.setState({ authenticated: true });
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
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      //* Use below higher order component wrapper to set styles on that level
      // <WithClass classes={styles.app}>

      <Aux>
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
            personsLength={this.state.persons.length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />
        ) : null}
        {persons}
      </Aux>

      // </WithClass>
    );
  }

  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h1', 'null', 'Hi, This is a React app!!!')
  // );
}

App.propTypes = {
  appTitle: PropTypes.string
};

export default withClass(App, styles.app);
