import React, { Component } from 'react';
import Helmet from "react-helmet";
import { Transition } from 'react-transition-group';

import Aux from '../../hoc/Aux/Aux';

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Button from '../../components/Button/Button';
import Textbox from '../../components/Textbox/Textbox';
import Modal from '../../components/Modal/Modal'

import classes from './Home.scss';

import rtgTransitions from '../../assets/images/react-transition-group-transition.png'
import rtgTransitionsFade from '../../assets/images/react-transition-group-transition-fade.png'

class Home extends Component {
  state = {
    modalOpen: false,
    modalCssOpen: false,
    show: false,
    showCss: false,
    fade: false
  }

  modalHandler = () => {
    this.setState({modalOpen: !this.state.modalOpen})
  }
  modalCssHandler = () => {
    this.setState({modalCssOpen: !this.state.modalCssOpen})
  }
  showHandler = () => {
    this.setState({show: !this.state.show})
  }
  showCssHandler = () => {
    this.setState({showCss: !this.state.showCss})
  }
  showFadeHandler = () => {
    this.setState({fade: !this.state.fade})
  }

  render = () => {
    const duration = 1000;

    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    }

    const transitionStyles = {
      entering: { opacity: 0 },
      entered:  { opacity: 1 },
    };

    const cssModal = (
      <Modal size="large" show={this.state.modalCssOpen} modalClosed={() => this.modalCssHandler()}>
            <ul style={{textAlign: "left", marginLeft: "45%", fontSize: "20px"}}>
              <li>
                appear
              </li>
              <li>
                enter
              </li>
              <li>
                exit
              </li>
            </ul>
          </Modal>
    );

    const transitionModal = (
      <Modal size="large" show={this.state.modalOpen} modalClosed={() => this.modalHandler()}>
        <div className={classes.Container}>
          <h2 style={{textAlign: "center"}}>Transition</h2>
          <div className={classes.FlexGridTwos}>
            <div className={classes.Col}>
              <p>
                There are 4 main states a Transition can be in:
              </p>
              <ul style={{textAlign: "left"}}>
                <li>
                  entering
                </li>
                <li>
                  entered
                </li>
                <li>
                  exiting
                </li>
                <li>
                  exited
                </li>
              </ul>
            </div>
            <div className={classes.Col}>
              <div className={classes.FlexGridTwos}>
                <div className={classes.Col}>
                  <Button
                    btnType="Clear"
                    clicked={() => this.showHandler()}>
                    Transition Example
                  </Button>
                  <br/>
                  <br/>
                  <br/>
                  <Transition
                    in={this.state.show}
                    timeout={1000}
                    unmountOnExit
                  >
                    {state => {
                      switch (state) {
                        case 'entering':
                          return 'state - entering';
                        case 'entered':
                          return 'state - entered';
                        case 'exiting':
                          return 'state - exiting';
                        case 'exited':
                          return 'state - exited';
                      }
                    }}
                  </Transition>
                </div>
                <div className={classes.Col}>
                  <Button
                    btnType="Clear"
                    clicked={() => this.showFadeHandler()}>
                    Transition Fade Example
                  </Button>
                  <Transition in={this.state.fade} timeout={duration}>
                    {(state) => (
                      <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                        }}>
                        <br/>
                        <br/>
                        I'm a fade Transition!
                      </div>
                    )}
                  </Transition>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.FlexGridTwos}>
            <div className={classes.Col}>
              <div style={{textAlign: "center",marginTop: "-60px"}}>
                <img src={rtgTransitions} alt="" height="420px" />
              </div>
            </div>
            <div className={classes.Col}>
              <img src={rtgTransitionsFade} alt="" height="87%" />
            </div>
          </div>
        </div>
      </Modal>
    )
    return (
      <Aux>
        {transitionModal}
        {cssModal}
        <Helmet title="Home Title"/>
        <Jumbotron imageURL="//placehold.it/1024x700/449955/000/FFF?text=React Transition Groups">
        </Jumbotron>
        <Textbox>
          <p style={{fontSize: "25px"}}>
            <strong>Components include:</strong>
            <br/>
            Transition
            <br/>
            CSSTransition
            <br/>
            TransitionGroup
          </p>
        </Textbox>
        <Textbox backgroundColor="teal">
          <p>
            <strong>
              Transition
            </strong>
            <br/>
            The Transition component lets you describe a transition from one component state to another over time with a simple declarative API
          </p>
        </Textbox>
        <Jumbotron imageURL="//placehold.it/1024x700/000/222?text=|" size="small">
          <div className={classes.CenterBox}><Button btnType="Grey" clicked={() => this.modalHandler()}>Transition</Button></div>
        </Jumbotron>
        <Textbox backgroundColor="teal">
          <p>
            <strong>
              CSSTransition
            </strong>
            <br/>
            A Transition component using CSS transitions and animations
            CSSTransition applies a pair of class names to the stages of transition.
          </p>
        </Textbox>
        <Jumbotron imageURL="//placehold.it/1024x700/456/222?text=|" size="small">
          <div className={classes.CenterBox}><Button btnType="Clear" clicked={() => this.modalCssHandler()}>CSS Transition</Button></div>
        </Jumbotron>
        <div className={classes.FlexGridTwos}>
          <div className={classes.Col}>
          </div>
          <div className={classes.Col}>
          </div>
        </div>
        <Jumbotron imageURL="//placehold.it/1024x700/333/555?text=backpack" size="small">
        </Jumbotron>
      </Aux>
    );
  }
}

export default Home;
