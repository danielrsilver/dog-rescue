import React, {Component} from 'react';
import '../css/footer.css'

export default class Footer extends Component {
  render() {
    return (<div>
      <div className="footer">
        <a href="mailto:Info@DogFinder.Com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.twitter.com/dogfinder/">
          <i className="fab fa-twitter fa-lg"></i>
        </a>
        <a href="https://www.facebook.com/dogfinder/">
          <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="https://www.instagram.com/dogfinder/">
          <i className="fab fa-instagram fa-lg"></i>
        </a>
      </div>
    </div>);
  }
}
