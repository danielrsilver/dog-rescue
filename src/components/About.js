import React, {Component} from 'react'
import '../css/about.css'

export default class About extends Component {
  render(){
    return(
      <div className="about">
        <h1 class="about-header">About Us</h1>
          <p class="about-paragraph">DogFinder was founded and created by three students who were working on a React App Development project. When tasked an assigment to create an app designed to resolve a problem to solution, they thought of this great idea called DogFinder. We saw a flaw in the way rescue groups go about adopting their animals to the public. We did not feel there was an efficient way to search for the dog you're looking for. You have to visit many different rescue groups to find the perfect dog. Instead, we created DogFinder, designed to locate dogs across the nation for you in just a few seconds. All you need to do is enter in a bit of information about the kind of  dog you're looking for and you'll be matched in seconds.</p>
          <h2 class="about-header-founders">Who Are The Founders?</h2>
          <div className="about-founders">
            <div class="daniel">
              <img class="ui small circular image" src={require('../images/Daniel.jpg')} />
              <p>Daniel</p>
            </div>
            <div class="maria">
              <img class="ui small circular image" src={require('../images/Maria.jpg')} />
              <p>Maria</p>
            </div>
            <div class="taylor">
              <img class="ui small circular image" src={require('../images/Taylor.jpg')} />
              <p>Taylor</p>
            </div>
          </div>
      </div>
    )
  }
};
