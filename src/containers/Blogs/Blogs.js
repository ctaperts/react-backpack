import React, { Component } from 'react';
import Helmet from "react-helmet";

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Button from '../../components/Button/Button';
import Textbox from '../../components/Textbox/Textbox';
import Aux from '../../hoc/Aux/Aux';
import classes from './Blogs.scss';

class Blogs extends Component {
  render = () => {
	return (
	  <Aux>
		<Helmet title="Blogs Title"/>
		<Jumbotron imageURL="//placehold.it/1024x700/333/555?text=Blog" size="small">
		</Jumbotron>
		<Textbox backgroundColor="yellow" color="black">
		  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia doloremque tempora placeat officia ex obcaecati tenetur deserunt repudiandae praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		</Textbox>
		<Textbox>
		  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia doloremque tempora placeat officia ex obcaecati tenetur deserunt repudiandae praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		</Textbox>
	  </Aux>
	);
  }
}

export default Blogs;
