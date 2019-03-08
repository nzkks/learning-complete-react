import React, { useEffect } from 'react';
import styles from './Dashboard.module.css';

const dashboard1 = props => {
  //* useEffect - componentDidMount and ComponentDidUpdate combined in one effect
  useEffect(() => {
    console.log('[Dashboard.js] useEffect');

    // Http request or similar code can go here

    setTimeout(() => {
      //const timer = setTimeout(() => {
      alert('Saved / fetched data to cloud!'); // just an example.
    }, 1000);

    //* The return statement below runs BEFORE the main useEffect function runs, but AFTER the (first) render cycle.
    return () => {
      // clearTimeout(timer);
      console.log('[Dashboard.js] cleanup work in useEffect');
    };
  }, []); // empty array is passed to avoid useEffect running all the time. Now it runs once in the beginning

  //useEffect(); // you can have many useEffect hooks

  useEffect(() => {
    console.log('[Dashboard.js] 2nd useEffect');
    return () => {
      console.log('[Dashboard.js] cleanup work in 2nd useEffect');
    };
  });

  const classes = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = styles.red;
  }

  if (props.personsLength <= 2) {
    classes.push(styles.red); // classes = [red]
  }

  if (props.personsLength <= 1) {
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

const areEqual = (prevProps, nextProps) => {
  return prevProps.dashboard === nextProps.dashboard;
};

const dashboard = React.memo(dashboard1, areEqual);

export default dashboard;
