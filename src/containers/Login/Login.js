import React, { Component, Fragment } from 'react';
import Helmet from "react-helmet";

import AuthContext from '../../context/auth-context';
import Button from '../../components/Button/Button';

import classes from './Login.scss';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  static contextType = AuthContext;

  handleChange = (event, inputType) => {
    if (inputType === 'username') {
      this.setState({username: event.target.value});
    }
    if (inputType === 'password') {
      this.setState({password: event.target.value});
    }
  }

  render = () => {

    return (
      <Fragment>
        <Helmet title="Login"/>
        <form onSubmit={(event) => this.context.login(event, this.state.username, this.state.password)}>
          <div className={classes.Field}>
            <label alt="username">
              Username
            </label>
            <input type="text" value={this.state.username} onChange={(event) => this.handleChange(event, "username")} />
          </div>
          <div className={classes.Field}>
            <label alt="password">Password
            </label>
            <input type="password" value={this.state.password} onChange={(event) => this.handleChange(event, "password")} />
          </div>
          <Button type="submit" value="Submit" btnType="Clear">
            Login
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default Login;
