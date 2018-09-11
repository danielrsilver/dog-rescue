import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home'
import dogForm from './dogForm'
import About from './About'

class Nav extends React.Component {
  render() {
    return (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/home">DogFinder</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav_item">
        <Link to="/home" className="nav-link">Home </Link>
      </li>
      <li class="nav-item">
        <Link to="/about" className="nav-link">About </Link>
      </li>
      <li class="nav-item">
        <Link to="/form" className="nav-link">Search</Link>
      </li>
    </ul>
  </div>

</nav>


    );
  }
}

export default Nav;
