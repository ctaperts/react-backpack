import React, { Component } from 'react';
import { withRouter } from 'react-router';

const timeout = ms => new Promise(res => setTimeout(res, ms))

async function delay () {
  await timeout(600)
  window.scrollTo(0, 0)
}

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      delay()
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
