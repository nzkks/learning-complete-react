import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  //! Unsafe Legacy lifecycle.
  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (
  //     //* if there is a need to check all the props use PureComponent instead of Component and shouldComponentUpdate check
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  //! Unsafe Legacy lifecycle.
  // componentWillUpdate(){

  // }

  // this will run once the render function runs. i.e. after the component gets updated.
  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(Snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          key={person.id}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

Persons.propTypes = {
  persons: PropTypes.array,
  clicked: PropTypes.func,
  changed: PropTypes.func
};

export default Persons;
