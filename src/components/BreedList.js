import React, {Component} from "react";
import axios from "axios";

class BreedList extends Component{
  constructor(){
  super();
  this.state={
    userMsg:null
    }
  }

  componentDidMount(){
    axios.get("http://api.petfinder.com/breed.list?key=api_key&format=json&output=full&animal=dog",{}).then((res)=>{
      //on success
      this.setState({userMsg:res.data});
    }).catch((error)=>{
      //on error
      alert("There is an error in API call.");
    });
  }

  render() {
    return(
      this.state.userMsg!=null &&
      <div>
        {this.state.userMsg.petfinder.breeds.breed}
      </div>
    );
  }
}

export default BreedList;
