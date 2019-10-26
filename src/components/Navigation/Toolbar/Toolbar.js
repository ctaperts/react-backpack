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
                  <Link to={'/login'}>Login</Link>
                </li>
              </ul>
            </div>
          </nav>
        );
    }
}

export default Toolbar;
