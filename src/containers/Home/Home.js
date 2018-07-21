import React, { Component } from 'react';
import Helmet from "react-helmet";

import Jumbotron from '../../components/Jumbotron/Jumbotron';
import classes from './Home.scss';

class Home extends Component {
    render = () => {
        return (
            <div className={classes.component}>
                <Helmet title="Home Title"/>
                <Jumbotron imageURL="//placehold.it/1024x700/449955/FFF" />
                <div className={classes.TextBox}>Hello, World</div>
            </div>
        );
    }
}

export default Home;
