import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import classes from './Jumbotron.scss';

const TronSlide = (props) => (
  <CSSTransition
	{...props}
	classNames="tron"
	timeout={1000}
	mountOnEnter={false}
	unmountOnExit={false}
    key={props.key}
  />
)
const Jumbotron = (props) => {
    return (
        <TronSlide>
          <div className={props.size === "small" ? classes.jumbotronSmall : classes.jumbotronLarge}>
            <img src={props.imageURL} />
            {props.children}
          </div>
        </TronSlide>
    )
}

export default Jumbotron;
