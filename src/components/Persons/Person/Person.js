import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import Aux from '../../../hoc/Auxiliary';
import styles from './Person.module.css';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    //* regular client based JavaScript way of targeting an element. This will always select the first element.
    // document.querySelector('input').focus();

    // * the below (old way) line and ref code works in class based component only
    // this.inputElement.focus();

    this.inputElementRef.current.focus();

    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');

    //* We can also remove the root level JSX element and render inner adjecent JSX elements as an array
    return (
      // <div className={styles.person}>

      //* use below Aux - root level wrapper to render adjecent JSX elements without any html wrapper element like 'div'.
      // <Aux>
      <Fragment>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          // * the below (old way) ref code works in class based component only and it has direct access of the element
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}

          ref={this.inputElementRef}
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

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, styles.person);
