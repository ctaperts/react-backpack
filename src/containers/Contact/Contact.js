import React, {Component} from 'react';
import Helmet from "react-helmet";

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Contact extends Component {
    render = () => {
        return (
            <section>
                <Helmet title="Contact us"/>
                <Toolbar/>
                <h1>Contact</h1>
            </section>
        );
    }
}

export default Contact;
