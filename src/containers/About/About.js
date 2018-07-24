import React, { Component } from 'react';
import Helmet from "react-helmet";

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Button from '../../components/Button/Button';
import Textbox from '../../components/Textbox/Textbox';
import Aux from '../../hoc/Aux/Aux';
import classes from './About.scss';

class About extends Component {
  render = () => {
	return (
	  <Aux>
		<Helmet title="About Title"/>
        <Jumbotron imageURL="//placehold.it/1024x700/123/FFF/FFF?text=https://github.com/ctaperts/react-backpack">
		</Jumbotron>
	  </Aux>
	);
  }
}

export default About;
