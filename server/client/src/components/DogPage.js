// import React from 'react';
// import {API_URL, getQueryParams, getProp} from "./Utils";
// import '../css/DogForm.css';
// import DogForm from './DogForm';
//
//
//
// export default class DogPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state  = {breeds: ['-'],pets:[]};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.findPets = this.findPets.bind(this);
//   }
//
//     // componentDidMount(){
//     //   fetch(`${API_URL}/breeds`).then(resp => resp.json()).then((resp)=>{
//     //         const breeds = resp.petfinder.breeds.breed.map((item)=>{
//     //             return {value:item['$t']};
//     //         })
//     //       this.setState({breeds})
//     //   })
//     // }
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
//
//      if(media && media.photos && media.photos.photo){
//        let { photos : { photo:photoObj } } = media;
//          photo = getProp(photoObj[2]);
//      } else {
//          return null
//      }
//
//     return (
//       <div>
//         <div class='dogInfo' key={id}>
//         <img class='dogPics' alt='dogPictures' src={photo}/>
//         </div>);
//
//         <div>
//           <span>Name: </span>
//           <span>{name}</span>
//         </div>
//
//         <div>
//           <span>Location: </span>
//           <span>{city}, {state} {zip}</span>
//         </div>
//
//         <div>
//           <span>Breed: </span>
//           <span>{breed}</span>
//         </div>
//
//         <div>
//           <span>Sex: </span>
//           <span>{sex}</span>
//         </div>
//
//         <div>
//           <span>Size: </span>
//           <span>{size}</span>
//         </div>
//
//         <div>
//           <span>Age: </span>
//           <span>{age}</span>
//         </div>
//
//         <div>
//           <span>Phone: </span>
//           <span>{phone}</span>
//         </div>
//
//         <div>
//           <span>Email: </span>
//           <span>{email}</span>
//         </div>
//
//         <div>
//           <span>ID#: </span>
//           <span>{id}</span>
//         </div>
//       </div>)
//     }
//   }
//
//   // render() {
//   //   const { breeds, pets } = this.state;
//   //   return (
//   //     <div class='dogPageRenderer'>
//   //       { pets.map(this.petRenderer) }
//   //     </div>
//   //   );
//   // }
// // }
