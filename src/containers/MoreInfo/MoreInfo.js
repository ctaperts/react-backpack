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
        <Jumbotron imageURL="//placehold.it/1024x700/449955/000/FFF?text=Alternatives">
		</Jumbotron>
		<Textbox backgroundColor="black" color="#fff">
          React CSS Transition Replace:<br/>
          <div style={{fontStyle: 'italic'}}>
            automatically handles the positioning of the animated components
          </div> <br/>
          <a href="https://github.com/marnusw/react-css-transition-replace" target="blank" style={{color: 'white'}}>
            https://github.com/marnusw/react-css-transition-replace
          </a>
        </Textbox>
        <Jumbotron imageURL="//placehold.it/1024x700/000/222?text=|" size="small">
          <div className={classes.CenterBox}><Button btnType="Grey">MoreInfo</Button></div>
        </Jumbotron>
        <Textbox>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia doloremque tempora placeat officia ex obcaecati tenetur deserunt repudiandae praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Textbox>
        <Jumbotron imageURL="//placehold.it/1024x700/449955/FFF?text=|">
          <div className={classes.CenterBox}><Button btnType="Success">MoreInfo</Button></div>
        </Jumbotron>
        <Textbox>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia doloremque tempora placeat officia ex obcaecati tenetur deserunt repudiandae praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Textbox>
        <Jumbotron imageURL="//placehold.it/1024x700/333/555?text=backpack" size="small">
        </Jumbotron>
      </Aux>
    );
  }
}

export default MoreInfo;
