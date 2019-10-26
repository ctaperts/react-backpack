import React, { Component, Fragment } from 'react';
import Helmet from "react-helmet";



import Button from '../../components/Button/Button';
import Textbox from '../../components/Textbox/Textbox';

import classes from './Login.scss';

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (event, inputType) => {
    if (inputType === 'username') {
      this.setState({username: event.target.value});
    }
    if (inputType === 'password') {
      this.setState({password: event.target.value});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Username: ' + this.state.username + '\nPassword: ' + this.state.password);
    // do stuff here to return jwt
    // store jwt in react hooks
  }

  render = () => {

    return (
      <Fragment>
        <Helmet title="Login"/>
        <Textbox>
          <form onSubmit={this.handleSubmit}>
            <p>
              <div className={classes.LoginField}>
                <strong>Username </strong>
                <input type="text" value={this.state.username} onChange={(event) => this.handleChange(event, "username")} />
                <br />
                  <strong>Password  </strong>
                  <input type="text" value={this.state.password} onChange={(event) => this.handleChange(event, "password")} />
                <br />
                <Button type="submit" value="Submit" btnType="Clear">
                  Submit
                </Button>
              </div>
            </p>
          </form>
        </Textbox>
      </Fragment>
    );
  }
}

export default Login;
