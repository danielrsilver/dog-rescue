import React, {Component} from 'react'
import '../css/about.css'

export default class About extends Component {
  render(){
    return(
      <div className="about">
        <h1 className="about-header">About Us</h1>
          <p className="about-paragraph">DogFinder was founded and created by three students who were working on a React App Development project. When tasked an assigment to create an app designed to resolve a problem to solution, they thought of this great idea called DogFinder. We saw a flaw in the way rescue groups go about adopting their animals to the public. We did not feel there was an efficient way to search for the dog you're looking for. You have to visit many different rescue groups to find the perfect dog.</p>
          <p className="about-paragraph2">Instead, we created DogFinder, designed to locate dogs across the nation for you in just a few seconds. All you need to do is enter in a bit of information about the kind of  dog you're looking for and your search will be matched within seconds.</p>
          <h2 className="about-header-founders">Who are the Founders?</h2>
          <div className="about-founders">
            <div className="daniel">
              <img className="ui small circular image" alt="daniel" src={require('../images/Daniel.jpg')} />
              <div className="name">Daniel</div>
              <div className="github"><a href="https://github.com/danielrsilver"><i className="fab fa-github"></i></a></div>
            </div>
            <div className="maria">
              <img className="ui small circular image" alt="maria" src={require('../images/Maria.jpg')} />
              <div className="name">Maria</div>
              <div className="github"><a href="https://github.com/mariapalves"><i className="fab fa-github"></i></a></div>
            </div>
            <div className="taylor">
              <img className="ui small circular image" alt="taylor" src={require('../images/Taylor.jpg')} />
              <div className="name">Taylor</div>
              <div className="github"><a href="https://github.com/taylorkrause95"><i className="fab fa-github"></i></a></div>
            </div>
          </div>
      </div>
    )
  }
};
