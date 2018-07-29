import React, { Component } from 'react';

class ScrollToTop extends Component {
  componentDidUpdate() {
    const options = {
      behavior: "smooth",
      left: 0,
      top: 0
    };
    window.scroll(options);
  }

  render() {
    return this.props.children
  }
}

export default ScrollToTop
