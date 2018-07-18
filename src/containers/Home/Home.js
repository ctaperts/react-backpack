import React, { Component } from 'react';
import Helmet from "react-helmet";

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Home.scss';

class Home extends Component {
    render = () => {
        return (
            <div className={classes.component}>
                <Helmet title="Home Title"/>
                <Toolbar/>
                <h1>Home</h1>
            </div>
        );
    }
}

export default Home;
