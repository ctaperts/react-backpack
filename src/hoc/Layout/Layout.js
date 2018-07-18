import React, { Component } from 'react';
import Helmet from "react-helmet";

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
// import Footer from '../../components/UI/Footer/Footer';

class Layout extends Component {

  render () {
    return (
      <Aux>
        <Helmet
          htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
          titleTemplate="%s | React App"
          titleAttributes={{itemprop: "name", lang: "en"}}
          meta={[
            {name: "description", content: "Server side rendering example"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
          ]}
          link={[{rel: "stylesheet", href: "/dist/styles.css"}]}
        />
        <Toolbar />
        <main>
          {this.props.children}
        </main>
      </Aux>
    )
  };
}

export default Layout
