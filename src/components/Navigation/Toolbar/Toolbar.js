import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import classes from './Toolbar.scss';

class Toolbar extends Component {
    render = () => {
        return (
          <nav>
            <div className={classes.Nav}>
              <ul>
                <li>
                  <Link to={'/to-do'}>To Do App</Link>
                </li>
                <li>
                  <Link to={'/blog'}>Blog</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/more-info'}>More Info</Link>
                </li>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default Toolbar;
