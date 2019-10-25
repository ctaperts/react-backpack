import React, { Component } from 'react';
import Helmet from "react-helmet";

import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import classes from './Layout.scss';

// import Footer from '../../components/Footer/Footer';

class Layout extends Component {

  render () {
    return (
      <Aux>
        <Helmet
          htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
          titleTemplate="%s | Backpack"
          titleAttributes={{itemprop: "name", lang: "en"}}
          meta={[
            {name: "description", content: "Backpack site"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
            {name: "theme-color", content: "#000"},
          ]}
          link={[
            {rel: "stylesheet", href: "/styles.css"},
            {rel: "manifest", href: "/manifest.json"},
          ]}
        />
        <Sidebar />
        <Toolbar />
        <ScrollToTop>
          <main>
            {this.props.children}
          </main>
        </ScrollToTop>
      </Aux>
    )
  };
}

export default Layout
