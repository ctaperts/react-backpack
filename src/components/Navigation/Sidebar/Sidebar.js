import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

import classes from './Sidebar.scss';

import AuthContext from '../../../context/auth-context';

class Sidebar extends Component {
  state = {
    collapsed: false
  }
  static contextType = AuthContext;
  // when changing other state to new state don't use this, will still work but
  // not recommended, and won't guarantee the update
  // handleCollapse = () => {
  //   this.setState({collapsed: !this.state.collapsed});
  // }
  // Use this
  handleCollapse = () => {
    this.setState((prevState, props) => {
      return {collapsed: !prevState.collapsed}
    });
  }
  render = () => {
    return (
      <Fragment>
        <nav className={this.state.collapsed ? classes.SidebarCollapsed : classes.Sidebar}>
          <div className={classes.Nav}>
            <ul>
              <li>
                <Link to={'/'}>
                  {this.state.collapsed ? 'H' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to={'/about'}>
                  {this.state.collapsed ? 'A' : 'About'}
                </Link>
              </li>
              {!this.context.authenticated ? null :
              <Fragment>
                <li>
                  <Link to={'/more-info'}>
                    {this.state.collapsed ? 'M' : 'More Info'}
                  </Link>
                </li>
                <li>
                  <Link to={'/contact'}>
                    {this.state.collapsed ? 'C' : 'Contact'}
                  </Link>
                </li>
              </Fragment>
              }
              <li>
                <Link to={'/blog'}>
                  {this.state.collapsed ? 'B' : 'Blog'}
                </Link>
              </li>
              <li>
                <Link to={'/to-do'}>
                  {this.state.collapsed ? 'T' : 'To Do App'}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className={this.state.collapsed ? classes.CollapseIconSmall : classes.CollapseIcon}>
          <a onClick={this.handleCollapse}>
            {this.state.collapsed ? '> >' : '< <'}
          </a>
        </div>
      </Fragment>
    );
  }
}

export default Sidebar;
