import React from 'react';

// * you can initiate default values in createContext. It could be string, number, array, object, etc
// * you decide where it is available. But it is a Javascript object that can be passed between React components without using props
const authContext = React.createContext({
  authenticated: false,
  login: () => {}
});

export default authContext;
