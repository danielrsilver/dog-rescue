import React, {Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import DogForm from './components/DogForm'
import About from './components/About'
import Contact from './components/Contact'
import Adoption from './components/Adoption'
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
              <Route path="/search" component={DogForm} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/adoption" component={Adoption} />
            <div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
