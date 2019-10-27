import React, { Component, Fragment } from 'react';

import classes from './Modal.scss';

import Backdrop from '../Backdrop/Backdrop';


class Modal extends Component {
  shouldComponent(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }
  render() {
    let size = null
    switch (this.props.size) {
      case "large":
        size = [classes.Modal, classes.Large].join(" ")
        break
      default:
        size = classes.Modal
    }
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={size}
          style={{
          transform: this.props.show ? 'tranlateY(0)' : 'tranlateY(-100vh)',
            opacity: this.props.show ? '1': '0',
            zIndex: this.props.show ? '500': '-1',
          }}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
