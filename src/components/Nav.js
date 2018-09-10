import React from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css'

class Nav extends React.Component {
  render() {
    return (

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/search">DogFinder</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse DogFinder-collapse" id="dogFinder">
    <ul class="DogFinder">
      <li class="nav-item">
        <Link to="/home" className="nav-link">Home </Link>
      </li>
      <li class="nav-item">
        <Link to="/adoption" className="nav-link">Adoption </Link>
      </li>
      <li class="footer-item">
        <Link to="/contact" className="nav-link">Contact</Link>
      </li>
      <li class="nav-item">
        <Link to="/search" className="nav-link">Search</Link>
      </li>
    </ul>
  </div>

</nav>


    );
  }
}

export default Nav;
