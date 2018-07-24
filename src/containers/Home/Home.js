import React, { Component } from 'react';
import Helmet from "react-helmet";
import { Transition } from 'react-transition-group';

import Aux from '../../hoc/Aux/Aux';

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Button from '../../components/Button/Button';
import Textbox from '../../components/Textbox/Textbox';
import Modal from '../../components/Modal/Modal'

import classes from './Home.scss';

import rtgRoutesExamplJSImage from '../../assets/images/react-transition-group-routes-js.png'
import rtgRoutesExamplCSSImage from '../../assets/images/react-transition-group-routes-css.png'

class Home extends Component {
  state = {
    modalOpen: false,
    show: false
  }

  modalHandler = () => {
    this.setState({modalOpen: !this.state.modalOpen})
  }

  render = () => {
    let infoModal = (
      <Modal size="large" show={this.state.modalOpen} modalClosed={() => this.modalHandler()}>
        <div className={classes.Container}>
                    <Transition
            in={this.state.show}
            timeout={1000}
            unmountOnExit
          >
          test!
          </Transition>
        </div>
      </Modal>
    )
    return (
      <Aux>
        {infoModal}
        <Helmet title="Home Title"/>
        <Jumbotron imageURL="//placehold.it/1024x700/449955/000/FFF?text=React Transition Groups">
        </Jumbotron>
        <Textbox backgroundColor="blue" color="#81ff00">
          <strong style={{fontSize: "20px"}}>
            Colby Taperts
          </strong>
        </Textbox>
        <Jumbotron imageURL="//placehold.it/1024x700/000/222?text=|" size="small">
          <div className={classes.CenterBox}><Button btnType="Grey" clicked={() => this.modalHandler()}>React Transition Groups</Button></div>
        </Jumbotron>
        <Textbox>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia doloremque tempora placeat officia ex obcaecati tenetur deserunt repudiandae praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Textbox>
        <Textbox>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quia doloremque tempora placeat officia ex obcaecati tenetur deserunt repudiandae praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Textbox>
        <div className={classes.FlexGridTwos}>
          <div className={classes.Col}>
            <img src={rtgRoutesExamplJSImage} alt=""></img>
          </div>
          <div className={classes.Col}>
            <img src={rtgRoutesExamplCSSImage} alt=""></img>
          </div>
        </div>
        <Jumbotron imageURL="//placehold.it/1024x700/333/555?text=backpack" size="small">
        </Jumbotron>
      </Aux>
    );
  }
}

export default Home;
