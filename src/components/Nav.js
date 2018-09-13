import React from 'react';
import {Link} from 'react-router-dom';
import '../css/nav.css'

export default class Nav extends React.Component {
  render() {
    return (<div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/search" className="navbar-brand">DogFinder</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav_item">
              <Link to="/" className="nav-link">Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link">Search</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>);
  }
}
