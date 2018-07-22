import React, { Component } from 'react';
import Helmet from "react-helmet";

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Button from '../../components/Button/Button';
import Textbox from '../../components/Textbox/Textbox';
import Aux from '../../hoc/Aux/Aux';
import classes from './Home.scss';

class Home extends Component {
  render = () => {
	return (
	  <Aux>
		<Helmet title="Home Title"/>
		<Jumbotron imageURL="//placehold.it/1024x700/449955/FFF?text=|">
		  <div className={classes.CenterBox}><Button btnType="Success">Home</Button></div>
		</Jumbotron>
		<Textbox backgroundColor="blue" color="#10f910">
		  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia doloremque tempora placeat officia ex obcaecati tenetur deserunt repudiandae praesentium.
		</Textbox>
		<Jumbotron imageURL="//placehold.it/1024x700/000/222?text=|" size="small">
		  <div className={classes.CenterBox}><Button btnType="Grey">Home</Button></div>
		</Jumbotron>
		<Textbox>
		  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia doloremque tempora placeat officia ex obcaecati tenetur deserunt repudiandae praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		</Textbox>
		<Textbox>
		  Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia doloremque tempora placeat officia ex obcaecati tenetur deserunt repudiandae praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		</Textbox>
		<Jumbotron imageURL="//placehold.it/1024x700/333/555?text=backpack" size="small">
		</Jumbotron>
	  </Aux>
	);
  }
}

export default Home;
