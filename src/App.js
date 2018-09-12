import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import dogForm from './components/dogForm'
import About from './components/About'
import Nav from './components/Nav'
import DogDetails from './components/dogDetails'
import Footer from './components/footer'

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
            <Route path="/search" component={dogForm} />
            <Route path="/about" component={About} />
            <Route path="/pets/*" component={DogDetails} />
            <Footer />
          </div>
      </BrowserRouter>
    )
  }
}
