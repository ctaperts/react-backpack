import React, { Component } from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout'
import Home from '../containers/Home/Home';
import About from '../containers/About/About';
import Contact from '../containers/Contact/Contact';
import Blogs from '../containers/Blogs/Blogs';
import ToDoItems from '../containers/ToDoItems/ToDoItems'
import MoreInfo from '../containers/MoreInfo/MoreInfo'

import ScrollToTop from '../hoc/ScrollToTop/ScrollToTop';

import classes from './App.scss';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route path="/contact" component={Contact}/>
    <Route path="/blog" component={Blogs}/>
    <Route path="/to-do" component={ToDoItems}/>
    <Route path="/more-info" component={MoreInfo}/>
    <Redirect to="/" />
  </Switch>
)


export default class App extends Component {

  render = () => {
    return (
      <section>
        <Layout>
          <ScrollToTop>
            <Routes/>
          </ScrollToTop>
        </Layout>
      </section>
    )
  }
}
