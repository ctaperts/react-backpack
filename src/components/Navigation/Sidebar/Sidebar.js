import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Aux from '../../../hoc/Aux/Aux';

import classes from './Sidebar.scss';

class Sidebar extends Component {
    render = () => {
        return (
          <Aux>
          <nav className={classes.Sidebar}>
            <div className={classes.Nav}>
              <ul>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/more-info'}>More Info</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
                <li>
                  <Link to={'/blog'}>Blog</Link>
                </li>
                <li>
                  <Link to={'/to-do'}>To Do App</Link>
                </li>
                <div className={classes.Collapse}>
                  <li>
                    <a>
                      	&lt; &lt;
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </Aux>
        );
    }
}

export default Sidebar;
