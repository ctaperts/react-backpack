import React from 'react';

const authContext = React.createContext({
  authenticate: false,
  userType: 0,
  login: () => {},
  logout: () => {}
});

export default authContext;
