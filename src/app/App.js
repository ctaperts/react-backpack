import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout'
import Home from '../containers/Home/Home';
import About from '../containers/About/About';
import Contact from '../containers/Contact/Contact';

export default class App extends Component {
  render = () => {
    const routes = (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Redirect to="/" />
      </Switch>
    )
    return (
      <section>
        <Layout>
          {routes}
        </Layout>
      </section>
    );
  }
}
