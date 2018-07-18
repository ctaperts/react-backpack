import React, {Component} from 'react';
import Helmet from "react-helmet";

class About extends Component {
    render = () => {
        return (
            <div>
                <Helmet title="About us"/>
                <h1>About</h1>
            </div>
        );
    }
}

export default About;
