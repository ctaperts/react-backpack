import React from 'react';
import {Route, Switch} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import classes from './AnimatedSwitch.scss'

const AnimatedSwitch = (props) => (
  <Route render={({ location }) => (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        classNames={{
        enter: classes.Enter,
        enterActive: classes.EnterActive,
        exit: classes.Exit,
        exitActive: classes.ExitActive,
        }}
        timeout={1100}>
        <section className={classes.FixContainer}>
          <Switch key={location.key} location={location}>
            {props.children}
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  )}/>
)

export default AnimatedSwitch;
