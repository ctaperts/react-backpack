import React, {Component} from 'react';
import Helmet from "react-helmet";
import {Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Home from '../containers/Home/Home';
import About from '../containers/About/About';
import Contact from '../containers/Contact/Contact';

export default class App extends Component {

    render = () => {
        return (
            <section>
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
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </section>
        );
    }
}
