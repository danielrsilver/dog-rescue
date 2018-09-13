import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import DogForm from './components/DogForm'
import About from './components/About'
import Nav from './components/Nav'
import Footer from './components/Footer'
import DogDetails from './components/DogDetails'

export default class App extends Component {
  render() {
    return (
      <div>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/search" component={DogForm}/>
          <Route path="/pets/*" component={DogDetails}/>
        </Switch>
        <Footer/>
      </div>
    </div>
  )
  }
}
