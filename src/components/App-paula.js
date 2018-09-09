import React, {Component} from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import DogForm from './dogForm'
import About from './About'
import Contact from './Contact'
import Adoption from './Adoption'
import axios from 'axios'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dogs: []

    }
  }
  componentDidMount(){
    axios.get('https://dog.ceo/api/breeds/image/random').then(json => console.log(json))
  }

  render(){
    return(
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/form" component={DogForm} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/adoption" component={Adoption} />
      </div>
    )
  }
}
