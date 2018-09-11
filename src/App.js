import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import DogForm from './components/dogForm'
import About from './components/About'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <div>
              <Nav />
            </div>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/search" component={DogForm} />
            <div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
