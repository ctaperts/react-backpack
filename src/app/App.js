import React, { Component } from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout'
import Home from '../containers/Home/Home';
import About from '../containers/About/About';
import Contact from '../containers/Contact/Contact';

import './App.scss';

const PageFade = (props) => (
  <CSSTransition
	{...props}
	classNames="fadeTranslate"
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
	    <Switch location={location}>
	      <Route exact path="/" component={Home} />
	      <Route exact path="/about" component={About} />
	      <Route path="/contact" component={Contact}/>
	      <Redirect to="/" />
	    </Switch>
      </PageFade>
    </TransitionGroup>
  </div>
))


export default class App extends Component {

  render = () => {
	return (
	  <section>
		<Layout>
		  <Routes/>
		</Layout>
	  </section>
	)
  }
}
