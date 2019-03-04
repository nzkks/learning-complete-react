import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Shan', age: 32 },
      { name: 'Maha', age: 25 },
      { name: 'Rish', age: 14 },
      { name: 'Dars', age: 9 }
    ]
  });

  const [otherState, setOtherState] = useState('Some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Max';

    setPersonsState({
      persons: [
        { name: 'Shan', age: 32 },
        { name: 'Maha', age: 26 },
        { name: 'Rish', age: 14 },
        { name: 'Darsh', age: 9 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, This is a React app</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      >
        My Hobbies: Drawing
      </Person>
      <Person
        name={personsState.persons[3].name}
        age={personsState.persons[3].age}
      />
    </div>
  );

  // return React.createElement(
  //   'div',
  //   { className: 'App' },
  //   React.createElement('h1', 'null', 'Hi, This is a React app!!!')
  // );
};

export default app;
