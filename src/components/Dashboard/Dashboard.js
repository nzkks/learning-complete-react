import React from 'react';
import styles from './Dashboard.module.css';

const dashboard = props => {
  const classes = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.red;
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red); // classes = [red]
  }

  if (props.persons.length <= 1) {
    classes.push(styles.bold); // classes = [red, bold]
  }

  return (
    <div className={styles.dashboard}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default dashboard;
