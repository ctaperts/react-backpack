import React from 'react';

import classes from './Textbox.scss';

const Textbox = (props) => {
  return (
	<div
	  className={[classes.TextBox, classes.Section].join(" ")}
	  style={{background: `${props.backgroundColor}`, color: `${props.color}`}}>
	  <p>
		{props.children}
	  </p>
	</div>
  )
}

export default Textbox;
