import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AnimatedSwitch from '../components/AnimatedSwitch/AnimatedSwitch';
import Layout from '../hoc/Layout/Layout'
import Home from '../containers/Home/Home';
import Login from '../containers/Login/Login';
import About from '../containers/About/About';
import Contact from '../containers/Contact/Contact';
import Blogs from '../containers/Blogs/Blogs';
import ToDoItems from '../containers/ToDoItems/ToDoItems'
import MoreInfo from '../containers/MoreInfo/MoreInfo'
import AuthContext from '../context/auth-context';

import classes from './App.scss';

const Routes = () => (
  <AnimatedSwitch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/about" component={About} />
    <Route path="/contact" component={Contact}/>
    <Route path="/blog" component={Blogs}/>
    <Route path="/to-do" component={ToDoItems}/>
    <Route path="/more-info" component={MoreInfo}/>
    <Redirect to="/" />
  </AnimatedSwitch>
)


export default class App extends Component {
  state = {
    authenticated: false,
    // user level type:
    // 0 reporter
    // 1 user
    // 2 admin
    // 3 super admin
    userType: 0
  }
  logoutHandler = (event, userType) => {
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
    console.log(this.state.authenticated);
    // do stuff here to return jwt
    //
    console.log(username, password);
    // store jwt in cookie or local storage
    //
    // set frontend state
    this.setState((prevState, props) => {
      return {
        userType: 1,
        authenticated: true
      }
    });
  }
  render = () => {
    return (
      <section>
        <Layout>
          <AuthContext.Provider value={{
            authenticated: this.state.authenticated,
            userType: this.state.userType,
            login: this.loginHandler,
            logout: this.logoutHandler
            }}>
            <Routes/>
          </AuthContext.Provider>
        </Layout>
      </section>
    )
  }
}
