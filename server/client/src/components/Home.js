import React, {Component} from 'react'
import {API_URL, getQueryParams, getProp} from "./Utils";
import '../css/home.css'

export default class Home extends Component {
  render(){
    return(
      <div className="homepage">

        <p className="home-paragraph1">Dogfinder is a way to centralize canine rescuing nationally. We saw a flaw in the adoption process for animals. Dogfinder gives you the ability to search all rescue groups nationally in one location. You can be as specific as the dogs breed, gender, age and more! All you need to do is simply fill out the form and you're one step closer to adopting your dream dog!</p>

        <h2 class="home-paragraph2">There are thousands of adoptable pets looking for a lovable home.</h2>
        <h2 class="home-paragraph2">Help a dog find their new home today!</h2>

        <label className="home-search-button" onClick={() => window.location.href = "/search"}>
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
//
// import React from 'react';
// import {API_URL, getQueryParams, getProp} from "./Utils";
// import '../css/DogForm.css'
//
// class DogForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state  = {breeds: ['-'],pets:[]};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.findPets = this.findPets.bind(this);
//   }
//
//     componentDidMount(){
//       fetch(`${API_URL}/breeds`).then(resp => resp.json()).then((resp)=>{
//             const breeds = resp.petfinder.breeds.breed.map((item)=>{
//                 return {value:item['$t']};
//             })
//           this.setState({breeds})
//       })
//     }
//
//     handleChange(event) {
//       this.setstate({value: event.target.value});
//     }
//
//     findPets(){
//       const breed = this.breedRef.value;
//       const location = this.locationRef.value;
//       const age = this.ageRef.value;
//       const sex = this.sexRef.value;
//       const size = this.sizeRef.value;
//       if(!location){
//           alert("Location is required");
//           return;
//       }
//       const query = {
//           breed,
//           location,
//           age,
//           sex,
//           size
//       };
//       fetch(`${API_URL}/find?${getQueryParams(query)}`).then(resp => resp.json()).then((resp) => {
//           if(!resp.petfinder || !resp.petfinder.pets){
//               alert("Provided arguments are incorrect :)");
//               return;
//           }
//           const { petfinder : { pets: { pet : pets } } } = resp;
//           this.setState({pets})
//       })
//     }
//
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     }
//
//     petRenderer = (pet) => {
//      let { media, age,id,name,sex,size,breeds:{breed},contact:{city,state,zip,email,phone},description}= pet;
//      age && (age = getProp(age));
//      name && (name = getProp(name));
//      sex && (sex = getProp(sex));
//      size && (size = getProp(size));
//      breed && (breed = getProp(breed));
//      city && (city = getProp(city));
//      state && (state = getProp(state));
//      zip && (zip = getProp(zip));
//      email && (email = getProp(email));
//      phone && (phone = getProp(phone));
//      id && (id=getProp(id));
//      description && (description=getProp(description));
//
//      let photo = '';
//      // if(contact && contact.phone){
//      //    contact === getProp(contact.phone);
//      // } else if (contact){
//      //    contact === getProp(contact.email);
//      // }
//      if(media && media.photos && media.photos.photo){
//        let { photos : { photo:photoObj } } = media;
//          photo = getProp(photoObj[2]);
//      } else {
//          return null
//      }
//
//     return (<div class='dogInfo' key={id}>
//       <img class='dogPics' alt='dogPictures' src={photo}/>
//       </div>);
//   }
//
//   render() {
//       const { breeds, pets } = this.state;
//     return (
//         <div className="dogform">
//             <label className="form" class="form">
//                 Location:
//                 <select ref={(ref)=>{this.locationRef = ref}} >
//                   <option value={'Alabama'}>Alabama</option>
//                   <option value={'Alaska'}>Alaska</option>
//                   <option value={'Arizona'}>Arizona</option>
//
//
//             <div class='petRenderer'>
//                 { pets.map(this.petRenderer) }
//             </div>
//         </div>
//     );
//   }
// }
