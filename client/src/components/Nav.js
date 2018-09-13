import React from 'react';
import {Link} from 'react-router-dom';
import '../css/nav.css'

export default class Nav extends React.Component {
  render() {
    return (<div class="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/search" className="navbar-brand">DogFinder</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav_item">
              <Link to="/" className="nav-link">Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link">About
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/search" className="nav-link">Search</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>);
  }
}
