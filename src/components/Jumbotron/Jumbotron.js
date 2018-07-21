import React, { Component } from 'react';

import classes from './Jumbotron.scss';

class Jumbotron extends Component {
  render() {
    return (
      <div className={classes.jumbotron}>
        <img src="//placehold.it/1024x700/449955/FFF" />
      </div>
    )
  }
}

export default Jumbotron;
