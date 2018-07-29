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
  let jumboSize = null
  switch(props.size){
    case "small":
      jumboSize = classes.jumbotronSmall
      break;
    case "large":
      jumboSize = classes.jumbotronLarge
      break;
    case "full":
      jumboSize = classes.jumbotronFull
      break;
    default:
      jumboSize = classes.jumbotronLarge
  }
  return (
    <TronSlide>
      <div className={jumboSize}>
        <img src={props.imageURL} />
        {props.children}
      </div>
    </TronSlide>
  )
}

export default Jumbotron;
