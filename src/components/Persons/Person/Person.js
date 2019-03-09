import React, { Component, Fragment } from 'react';
// import Aux from '../../../hoc/Auxiliary';
import styles from './Person.module.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');

    //* We can also remove the root level JSX element and render inner adjecent JSX elements as an array
    return (
      // <div className={styles.person}>

      //* use below Aux - root level wrapper to render adjecent JSX elements without any html wrapper element like 'div'.
      // <Aux>
      <Fragment>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
      // </Aux>
      // </div>
    );
  }
}

export default withClass(Person, styles.person);
