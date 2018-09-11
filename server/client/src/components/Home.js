import React, {Component} from 'react'
import '../css/home.css'

export default class Home extends Component {
  render(){
    return(
      <div class="homepage">

        <p class="home-paragraph1">Dogfinder is a way to centralize canine rescuing nationally. We saw a flaw in the adoption process for animals. Dogfinder gives you the ability to search all rescue groups nationally in one location. You can be as specific as the dogs breed, gender, age and more! All you need to do is simply fill out the form and you're one step closer to adopting your dream dog!</p>

        <h2 class="home-paragraph2">There are thousands of adoptable pets looking for a lovable home.</h2>
        <h2 class="home-paragraph2">Help a dog find their new home today!</h2>

        <label class="home-search-button" onClick={() => window.location.href = "/search"}>
          <div class="ui large animated button" tabindex="0">
            <div class="visible content">
              Find a Dog!</div>
            <div class="hidden content">
              <i class="right arrow icon"></i>
            </div>
          </div>
        </label>

      </div>
    );
  }
}
