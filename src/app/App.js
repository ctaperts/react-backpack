import React, { Component, useContext } from 'react';
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
import Auth from '../hoc/Auth/Auth';
import AuthContext from '../context/auth-context';

import classes from './App.scss';

const Routes = () => {
  const authContext = useContext(AuthContext);
  return (
    <AnimatedSwitch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={About} />
      <Route path="/blog" component={Blogs}/>
      <Route path="/to-do" component={ToDoItems}/>
      {!authContext.authenticated ? null :
      <React.Fragment>
        <Route path="/more-info" component={MoreInfo}/>
        <Route path="/contact" component={Contact}/>
      </React.Fragment>
      }
      <Redirect to="/" />
    </AnimatedSwitch>
  )
}


export default class App extends Component {
  render = () => {
    return (
      <section>
        <Auth>
          <Layout>
            <Routes/>
          </Layout>
        </Auth>
      </section>
    )
  }
}
