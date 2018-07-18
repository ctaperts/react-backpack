import React, {Component} from 'react';
import Helmet from "react-helmet";

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class About extends Component {
    render = () => {
        return (
            <div>
                <Helmet title="About us"/>
                <Toolbar/>
                <h1>About</h1>
            </div>
        );
    }
}

export default About;
