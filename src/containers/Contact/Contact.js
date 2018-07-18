import React, {Component} from 'react';
import Helmet from "react-helmet";

class Contact extends Component {
    render = () => {
        return (
            <section>
                <Helmet title="Contact us"/>
                <h1>Contact</h1>
            </section>
        );
    }
}

export default Contact;
