import React, { Component } from 'react';
import '../css/footer.css'

export default class Footer extends Component {
  render(){
    return(
      <div>
        <div class="footer">
            <a href="mailto:Info@DogFinder.Com"><i class="fas fa-envelope"></i></a>
            <a href="https://www.twitter.com/dogfinder/"><i class="fab fa-twitter fa-lg"></i></a>
            <a href="https://www.facebook.com/dogfinder/"><i class="fab fa-facebook fa-lg"></i></a>
            <a href="https://www.instagram.com/dogfinder/"><i class="fab fa-instagram fa-lg"></i></a>
        </div>
      </div>
    );
  }
}
