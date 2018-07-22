import React, { Component } from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom';

import Layout from '../hoc/Layout/Layout'
import Home from '../containers/Home/Home';
import About from '../containers/About/About';
import Contact from '../containers/Contact/Contact';
import Blog from '../containers/Blog/Blog';

import ScrollToTop from '../hoc/ScrollToTop/ScrollToTop';

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
        <section className="fix-container" style={{marginTop:'16px'}}>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="/contact" component={Contact}/>
            <Route path="/blog" component={Blog}/>
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
