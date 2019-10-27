import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

import AuthContext from '../../../context/auth-context';
import classes from './Toolbar.scss';

class Toolbar extends Component {

  static contextType = AuthContext;

  render = () => {
    return (
      <nav>
        <div className={classes.Nav}>
          <ul>
            <li>
              {this.context.authenticated ? <a onClick={this.context.logout}>Logout</a> : <Link to={'/login'}>Login</Link>}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Toolbar;
