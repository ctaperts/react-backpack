import React, { Component, Fragment } from 'react';
import Helmet from "react-helmet";

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Button from '../../components/Button/Button';
import Textbox from '../../components/Textbox/Textbox';

import classes from './Contact.scss';

class Contact extends Component {
  render = () => {
	return (
	  <Fragment>
		<Helmet title="Contact Title"/>
		<Jumbotron imageURL="//placehold.it/1024x700/333/555?text=Contact Us" size="small">
		</Jumbotron>
		<Textbox backgroundColor="tan" color="blue">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia doloremque tempora placeat officia ex obcaecati tenetur deserunt repudiandae praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
		</Textbox>
		<Textbox>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia doloremque tempora placeat officia ex obcaecati tenetur deserunt repudiandae praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
		</Textbox>
	  </Fragment>
	);
  }
}

export default Contact;
