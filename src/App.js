import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import dogForm from './components/dogForm'
import About from './components/About'
import Nav from './components/Nav'
import Footer from './components/Footer'


import axios from 'axios'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>
<<<<<<< HEAD
            <div>
              <Nav />
            </div>
              <Route path="/home" component={Home} />
              <Route path="/search" component={DogForm} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/adoption" component={Adoption} />
            <div>
              <Footer />
            </div>
=======
            <Nav />
          </div>
            <Route path="/home" component={Home} />
            <Route path="/form" component={dogForm} />
            <Route path="/about" component={About} />
>>>>>>> 070b4fa469283a922c06d2386f6dbe1d6a8aacb4
          </div>
      </BrowserRouter>
    )
  }
}
