import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Toolbar extends Component {
    render = () => {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={'/'}>Homepage</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Toolbar;
