import React, {Component} from 'react'

export default class About extends Component {
  render(){
    return(
      <div className="about">
        <h1>About DogFinder</h1>
          <i class="fas fa-paw"></i>
          <br />
        <br />

        <p>DogFinder was founded and created by three students who were working on a React App Development Project. When tasked an assigment to create an app designed to resolve a problem with a solution, they thought of this great idea called DogFinder. There is a flaw in the way rescue groups go about adopting their animals to the public. They did not feel there was an efficient way to search for the dog you're looking for. You have to visit many different rescue groups to find the perfect dog. Instead DogFinder was created and designed to locate dogs across the nation for adopters in just a few seconds. All you need to do is enter in a bit of information about the kind of dog you're looking for and your search will be matched within seconds.</p>
          <br />
          <p>Once you have found your match, you will be able to view details about the dog. The information provided includes their size, age, and a detailed description about the animal. You will also be given direct contact information to the rescue group that currently has the dog. </p>
          <br />

        <h2>So, who are the Founders?</h2>
        <br />
        <ul className="founders">
          <li>Daniel</li>
          <li>Maria</li>
          <li>Taylor</li>
        </ul>
   </div>
    )
  }
};
