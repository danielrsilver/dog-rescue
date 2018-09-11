import React, {Component} from 'react'
import {API_URL, getQueryParams, getProp} from "./Utils";
import '../css/home.css'

export default class Home extends Component {
  render(){
    return(
      <div className="homepage">
        <h2>
          <a href="./search">Rescue a Dog Today!</a>
        </h2>
          <p className="homeparagraph1">Dogfinder is a way to centralize canine rescuing nationally. We saw a flaw in the adoption process for animals. Dogfinder gives you the ability to search all rescue groups nationally in one location. You can be as specific as the dogs breed, gender, age and more! All you need to do is simply fill out the form and you're one step closer to adopting your dream dog! </p>
        <h1>DogFinder</h1><i class="fas fa-bone"></i>
        <h2>There are thousands of adoptable pets looking for a lovable home. Help a dog find their new home today!</h2>
        <h2 className="homeparagraph1">Dogfinder is a way to centralize canine rescuing nationally. We saw a flaw in the adoption process for animals. Dogfinder gives you the ability to search all rescue groups nationally in one location. You can be as specific as the dogs breed, gender, age and more! All you need to do is simply fill out the form and you're one step closer to adopting your dream dog! </h2>

          <div class="flex-container">
      <div>
        <section>
      <h1>Planing to Rescue a Dog?</h1>
     <p>Finding the right Dog</p>
     <i class="fas fa-fire-extinguisher fa-2x "></i>
    </section>
      </div>

      <div>
        <article>
      <h1>Chechlist for the New Addition</h1>
    <p>Help to make the transition as smooth as possible</p>
     <i class="fas fa-check fa-2x"></i>
       </article>
      </div>

      <div>

         <aside>
       <h1>Dog Adoption</h1>
        <p>Get tips on figuring out who you should adopt</p>
        <i class="fas fa-heart fa-2x"></i>
         </aside>
      </div>

      </div>
    </div>









    );
  }
}
