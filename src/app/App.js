import React, { Component } from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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

const PageFade = (props) => (
  <CSSTransition
    {...props}
    classNames={{
      enter: classes.Enter,
      enterActive: classes.EnterActive,
      exit: classes.Exit,
      exitActive: classes.ExitActive,
    }}
    timeout={1000}
    mountOnEnter={true}
    unmountOnExit={true}
    key={props.key}
  />
)

const Routes = withRouter(({ location }) => (
  <div>
    <TransitionGroup>
      <PageFade key={location.key}>
        <section className={classes.FixContainer}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/contact" component={Contact}/>
            <Route path="/blog" component={Blogs}/>
            <Route path="/to-do" component={ToDoItems}/>
            <Route path="/more-info" component={MoreInfo}/>
            <Redirect to="/" />
          </Switch>
        </section>
      </PageFade>
    </TransitionGroup>
  </div>
))


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
