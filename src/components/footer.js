import React, { Component } from 'react';
import '../css/footer.css'

export default class Footer extends Component {
  render(){
    return(
      <div>
        <div class="footer">
          <p class="footer-block">Email: <a href="mailto:Info@DogFinder.Com">Info@DogFinder.Com</a></p>
            <i class="fab fa-twitter fa-lg"></i>
            <i class="fab fa-facebook fa-lg"></i>
            <i class="fab fa-instagram fa-lg"></i>
        </div>
      </div>
    );
  }
}
