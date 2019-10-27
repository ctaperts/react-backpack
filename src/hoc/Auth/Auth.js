import React, { Component } from 'react';

import AuthContext from '../../context/auth-context';

export default class Auth extends Component {
  state = {
    authenticated: false,
    // user level type:
    // 0 reporter
    // 1 user
    // 2 admin
    // 3 super admin
    userType: 0
  }
  logoutHandler = (event) => {
    event.preventDefault();
    this.setState((prevState, props) => {
      return {
        userType: 0,
        authenticated: false
      }
    });
  }
  loginHandler = (event, username, password) => {
    event.preventDefault();
    // TODO add expiration time for token and setup timeout wrapper in routes
    // do stuff here to return jwt
    //
    // store jwt in cookie or local storage
    //
    // set frontend state,
    this.setState((prevState, props) => {
      return {
        userType: 1,
        authenticated: true
      }
    });
  }
  render = () => {
    return (
      <AuthContext.Provider value={{
        authenticated: this.state.authenticated,
        userType: this.state.userType,
        login: this.loginHandler,
        logout: this.logoutHandler
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
