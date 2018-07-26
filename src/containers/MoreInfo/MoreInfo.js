import React, { Component } from 'react';
import Helmet from "react-helmet";

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Button from '../../components/Button/Button';
import Textbox from '../../components/Textbox/Textbox';
import Aux from '../../hoc/Aux/Aux';
import classes from './MoreInfo.scss';

class MoreInfo extends Component {
  render = () => {
	return (
	  <Aux>
		<Helmet title="MoreInfo Title"/>
        <Jumbotron imageURL="//placehold.it/1024x700/445/000/FFF?text=Other Examples">
		</Jumbotron>
        <Textbox backgroundColor="#554" color="#fff">
          <div style={{fontStyle: 'italic', paddingTop: "40px"}}>
            <p>
              Animated page transitions
            </p>
          </div>
          <a href="http://animate.mhaagens.me/" target="blank" style={{color: 'white'}}>
            <p>
              http://animate.mhaagens.me/
            </p>
          </a>
        </Textbox>
        <Jumbotron imageURL="//placehold.it/1024x700/449955/000/FFF?text=Alternatives">
        </Jumbotron>
        <Textbox backgroundColor="black" color="#fff">
          <p>
            React-Motion:<br/>
          </p>
          <div style={{fontStyle: 'italic'}}>
			<p>
			  A spring that solves your animation problems.
			</p>
		  </div>
          <a href="https://github.com/chenglou/react-motion" target="blank" style={{color: 'white'}}>
			<p>
              https://github.com/chenglou/react-motion
			</p>
		  </a>
		</Textbox>
		<Textbox backgroundColor="black" color="#fff">
		  <p>
			React Pose:<br/>
		  </p>
		  <div style={{fontStyle: 'italic'}}>
			<p>
			  Declarative motion system for React, React Native, and vanilla JS
			</p>
		  </div>
		  <a href="https://popmotion.io/pose/" target="blank" style={{color: 'white'}}>
			<p>
			  https://popmotion.io/pose/
			</p>
		  </a>
		</Textbox>
		<Textbox backgroundColor="black" color="#fff">
		  <p>
			React CSS Transition Replace:<br/>
		  </p>
		  <div style={{fontStyle: 'italic'}}>
			<p>
			  automatically handles the positioning of the animated components
			</p>
		  </div>
		  <a href="https://github.com/marnusw/react-css-transition-replace" target="blank" style={{color: 'white'}}>
			<p>
			  https://github.com/marnusw/react-css-transition-replace
			</p>
		  </a>
		</Textbox>
	  </Aux>
	);
  }
}

export default MoreInfo;
