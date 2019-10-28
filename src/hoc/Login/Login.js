import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import AuthContext from '../../context/auth-context';
import { AuthClearLocalState, DemoAuthenticate } from '../Auth/Auth';

class Login extends Component {
  state = {
    authenticated: false,
    // user level type:
    // 0 reporter
    // 1 user
    // 2 admin
    // 3 super admin
    userType: 0
  }

  // logout handler
  logoutHandler = (event) => {
    event.preventDefault();
    // Clear local state
    AuthClearLocalState();
    this.setState((prevState, props) => {
      return {
        userType: 0,
        authenticated: false
      }
    });
    // return home on log out
    const { history } = this.props;
    if(history) history.push('/');
  }

  // login handler
  loginHandler = (event, userId, password) => {
    event.preventDefault();
    // DEMO login
    DemoAuthenticate(userId, password);
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
    // return home on log in
    const { history } = this.props;
    if(history) history.push('/');
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

export default withRouter(Login);
