import React from 'react';

import classes from './Jumbotron.scss';

const Jumbotron = (props) => {
    return (
      <div className={props.size === "small" ? classes.jumbotronSmall : classes.jumbotronLarge}>
        <img src={props.imageURL} />
        {props.children}
      </div>
    )
}

export default Jumbotron;
