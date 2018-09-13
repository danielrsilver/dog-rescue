import React, {Component} from 'react'
import '../css/home.css'

export default class Home extends Component {
  render() {
    return (<div className="homepage">
      <div id="bottom" className="parallax">
        <h1 className="h1">DogFinder</h1>
        <i className="fas fa-paw fa-2x"></i>

        <h2 className="home-paragraph1">Dogfinder is a way to centralize canine rescuing nationally. We saw a flaw in the adoption process for animals. Dogfinder gives you the ability to search all rescue groups nationally in one location. You can be as specific as the dogs breed, gender, age and more! All you need to do is simply fill out the form and you are one step closer to adopting your dream dog!</h2>

        <h2 className="home-paragraph2">There are thousands of adoptable pets looking for a lovable home.</h2>
        <h2 className="home-paragraph2">Help a dog find their new home today!</h2>

        <label className="home-search-button" onClick={() => window.location.href = "/search"}>
          <div className="ui f blue large animated button" tabindex="0">
            <div className="visible content">
              Find a Dog!</div>
            <div className="hidden content">
              <i className="right arrow icon"></i>
            </div>
          </div>
        </label>

        <div className="ui divider"></div>

        <div className="home-bottom-section">
          <div className="ui grid">
            <div className="sixteen wide column">
              <h1>Rescuing a Dog?</h1>
              <p>Find the perfect match with DogFinder!</p>
              <i className="fas fa-fire-extinguisher fa-3x "></i>
            </div>
            <div className="eight wide column">
              <h1>New Adoptions</h1>
              <p>Smooth and easy transition possible.</p>
              <i className="fas fa-check fa-3x"></i>
            </div>
            <div className="eight wide column">
              <h1>Unlimited Choices</h1>
              <p>Thousands of beautiful dogs to choose from.</p>
              <i className="fas fa-heart fa-3x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
