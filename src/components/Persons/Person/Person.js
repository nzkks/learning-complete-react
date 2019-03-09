import React, { Component } from 'react';
// import styles from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');

    //* We can also remove the root level JSX element and render inner adjecent JSX elements as an array
    return [
      // <div className={styles.person}>
      <p key="item1" onClick={this.props.click}>
        I'm {this.props.name} and I am {this.props.age} years old!
      </p>,
      <p key="item2">{this.props.children}</p>,
      <input
        key="item3"
        type="text"
        onChange={this.props.changed}
        value={this.props.name}
      />
      // </div>
    ];
  }
}

export default Person;
