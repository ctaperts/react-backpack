import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import AuthContext from '../../context/auth-context';

class Auth extends Component {
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
    // return home on log out
    const { history } = this.props;
    if(history) history.push('/');
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

export default withRouter(Auth);
