import React, { useEffect } from 'react';
import styles from './Dashboard.module.css';

const dashboard = props => {
  //* useEffect - componentDidMount and ComponentDidUpdate combined in one effect
  useEffect(() => {
    console.log('[Dashboard.js] useEffect');

    // Http request
    setTimeout(() => {
      alert('Saved / fetched data to cloud!'); // just an example.
    }, 1000);
  }, []); // empty array is passed to avoid useEffect running all the time. Now it runs once in the beginning

  //useEffect(); // you can have many useEffect hooks

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
