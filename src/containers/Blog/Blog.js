import React, { Component } from 'react';
import Helmet from "react-helmet";

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Button from '../../components/Button/Button';
import Textbox from '../../components/Textbox/Textbox';
import Aux from '../../hoc/Aux/Aux';
import classes from './Blog.scss';

class Blog extends Component {
  render = () => {
	return (
	  <Aux>
		<Helmet title="Blog Title"/>
		<Jumbotron imageURL="//placehold.it/1024x700/333/555?text=backpack" size="small">
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

export default Blog;
