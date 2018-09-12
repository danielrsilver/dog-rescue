import React, {Component} from 'react'
import {API_URL, getQueryParams, getProp} from "./Utils";
import '../css/home.css'

export default class Home extends Component {
  render(){
    return(
      <div className="homepage">
        <div id="bottom" class="parallax">
        <h1 className="h1">DogFinder</h1>
          <i class="fas fa-paw fa-2x"></i>

        <h2 className="home-paragraph1">Dogfinder is a way to centralize canine rescuing nationally. We saw a flaw in the adoption process for animals. Dogfinder gives you the ability to search all rescue groups nationally in one location. You can be as specific as the dogs breed, gender, age and more! All you need to do is simply fill out the form and you're one step closer to adopting your dream dog!</h2>
        <h2 className="home-paragraph2">There are thousands of adoptable pets looking for a lovable home. Help a dog find their new home today!</h2>
      <label className="home-search-button" onClick={() => window.location.href = "/search"}>
          <div className="ui f blue animated button" tabindex="0">
            <div className="visible content">
              Find a Dog!</div>
            <div className="hidden content">
              <i className="right arrow icon"></i>
            </div>
          </div>
        </label>
        <hr class="style1"></hr>
        <div className="flex-container">
              <h1>Why DogFinder?</h1>
            </div>

          <div className="flex-container">

      <div >
        <section className="one">
      <h1>Rescuing a Dog?</h1>
     <p>Find the perfect match with DogFinder!</p>
     <i class="fas fa-fire-extinguisher fa-3x "></i>
    </section>
      </div>

      <div >
        <article className="two">
      <h1>New Adoptions</h1>
    <p>Smooth and easy transition possible.</p>
     <i class="fas fa-check fa-3x"></i>
     </article>
      </div>

      <div>

         <aside className="three">
       <h1>Unlimited Choices</h1>
        <p>Thousands of beautiful dogs to choose from.</p>
        <i class="fas fa-heart fa-3x"></i>
         </aside>
      </div>
    </div>
        </div>
    </div>
    );
  }
}
