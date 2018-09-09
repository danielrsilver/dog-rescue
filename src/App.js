import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import dogForm from './components/dogForm'
import About from './components/About'
import Contact from './components/Contact'
import Adoption from './components/Adoption'

import Nav from './components/Nav'

import axios from 'axios'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
            <Nav />
          </div>
            <Route path="/home" component={Home} />
            <Route path="/form" component={dogForm} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/adoption" component={Adoption} />
          </div>
      </BrowserRouter>
    )
  }
}
