import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Aux from '../../../hoc/Aux/Aux';

import classes from './Sidebar.scss';

class Sidebar extends Component {
    render = () => {
        return (
          <Aux>
          <nav class={classes.Sidebar}>
            <div className={classes.Nav}>
              <ul>
                <li>
                  <Link to={'/login'}>Login</Link>
                </li>
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
          <div class={classes.Collapse}>
            Collapse
          </div>
          </Aux>
        );
    }
}

export default Sidebar;
