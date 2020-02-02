import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/* Navbar navigating to home page and blog app. */
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <Link to="/" className="navbar-brand">AW</Link>
              <div className="collpase navbar colllapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/blogs" className="nav-link">Blog</Link>
                </li>
              </ul>
              </div>
            </nav>
        );
    }
}
