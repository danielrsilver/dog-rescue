import React from 'react';
import { render } from 'react-dom';
<<<<<<< HEAD
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
=======
import { BrowserRouter as Router, Route } from 'react-router-dom';
>>>>>>> 070b4fa469283a922c06d2386f6dbe1d6a8aacb4
import App from './App';
import './index.css';

const Root = () => {
  return(
    <Router>
      <App/>
    </Router>
  )
}



render(<Root />, document.getElementById('root'));
