import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import dogForm from './dogForm';

class Nav extends React.Component {
  render() {
    return (
        // <ul class="nav-bar">
        //   <li class="testclass"><Link to="/">Home</Link></li>
        //     <li class="testclass"><Link to="/">Nav</Link></li>
        //   <li><Link to="/form">Form</Link></li>
        //   <li><Link to="/about">About</Link></li>
        //   <li><Link to="/contact">Contact</Link></li>
        //   <li><Link to='/adoption'>Adoption</Link></li>
        // </ul>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to="/home" className="nav-link">Home </Link>
      </li>
      <li class="nav-item">
        <Link to="/about" className="nav-link">About </Link>
      </li>
      <li class="nav-item">
        <Link to="/adoption" className="nav-link">Adoption </Link>
      </li>
      <li class="nav-item">
        <Link to="/contact" className="nav-link">Contact</Link>
      </li>
    </ul>
  </div>
</nav>

    );
  }
}

export default Nav;
