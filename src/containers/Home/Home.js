import React, { Component } from 'react';
import Helmet from "react-helmet";

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import classes from './Home.scss';

class Home extends Component {
    render = () => {
        return (
            <div className={classes.component}>
                <Helmet title="Home Title"/>
                <Jumbotron />
                <div className={classes.TextBox}>Hello, World</div>
            </div>
        );
    }
}

export default Home;
