import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './css/index.css';
import './css/DogForm.css';

const Root = () => {
  return (<Router>
    <App/>
  </Router>)
}

render(<Root/>, document.getElementById('root'));
