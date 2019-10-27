import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import AuthContext from '../../../context/auth-context';
import classes from './Toolbar.scss';

class Toolbar extends Component {
    render = () => {
        return (
          <nav>
            <div className={classes.Nav}>
              <ul>
                <AuthContext.Consumer>
                  {(context) =>
                    <li>
                      {context.authenticated ? <a onClick={context.logout}>Logout</a> : <Link to={'/login'}>Login</Link>}
                    </li>
                  }
                </AuthContext.Consumer>
              </ul>
            </div>
          </nav>
        );
    }
}

export default Toolbar;
