import React, {Component} from 'react'

export default class Home extends Component {
  render(){
    return(
      <div className="homepage">
        <h2>
          <a href="./search">Rescue a Dog Today!</a>
        </h2>
        <p className="homeparagraph1">Dogfinder is a way to centralize canine rescuing nationally. We saw a flaw in the adoption process for animals. Dogfinder gives you the ability to search all rescue groups nationally in one location. You can be as specific as the dogs breed, gender, age and more! All you need to do is simply fill out the form and you're one step closer to adopting your dream dog! </p>
      </div>
    );
  }
}
