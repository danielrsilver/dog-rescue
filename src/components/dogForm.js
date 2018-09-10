import React, { Component } from 'react';
import React from 'react';
import {API_URL, getQueryParams, getProp} from "../utils";

class DogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {breeds: ['-'],pets:[]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findPets = this.findPets.bind(this);
  }

    componentDidMount(){
      fetch(`${API_URL}/breeds`).then(resp => resp.json()).then((resp)=>{
            const breeds = resp.petfinder.breeds.breed.map((item)=>{
                return {value:item['$t']};
            })
          this.setState({breeds})
      })
    }

    handleChange(event) {
      this.setstate({value: event.target.value});
    }

    openDetails(pet){

    }

    findPets(){
      const breed = this.breedRef.value;
      const location = this.locationRef.value;
      const age = this.ageRef.value;
      const sex = this.sexRef.value;
      const size = this.sizeRef.value;

      if(!location){
          alert("Location is required");
          return;
      }

      const query = {
          breed,
          location,
          age,
          sex,
          size
    };

      fetch(`${API_URL}/find?${getQueryParams(query)}`).then(resp => resp.json()).then((resp) => {
          if(!resp.petfinder || !resp.petfinder.pets){
              alert("Your search results returned no matches");
              return;
            }
          const { petfinder : { pets: { pet : pets } } } = resp;
          this.setState({pets})
      })
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    petRenderer = (pet) => {
     let { media, age,id:{$t:petId },contact,name,sex }= pet;
     age && (age=getProp(age));
     name && (name  = getProp(name));
     sex && (sex  = getProp(sex));
     let photo = '';
     if(contact && contact.phone){
         contact = getProp(contact.phone);
     }else if (contact){
         contact = getProp(contact.email);
     }
     if(media && media.photos && media.photos.photo){
     let { photos : { photo:photoObj } } = media;
         photo = getProp(photoObj[2]);
     } else {
         return null
     }
            return (<div style={{display:'inline-block',width:'20%',height:'300px','marginTop':'30px'}} key={petId}>
                <div>
                    <span>Name: </span>
                    <span>{name}</span>
                </div>
                <div>
                    <span>Sex: </span>
                    <span>{sex}</span>
                </div>
                <div>
                    <span>Age: </span>
                    <span>{age}</span>
                </div>
                <div>
                    <span>Contact: </span>
                    <span>{contact}</span>
                </div>
                <img onClick={()=>{
                    this.openDetails(pet);
                  }} style={{display:'block',width:'100',maxHeight:'150px'}} src={photo}/>
            </div>);
    }

  render() {
      const { breeds, pets } = this.state;
    return (
        <div className="dogform">
            <label className="form">
                Breed:
                <select ref={(ref)=>{this.breedRef = ref}}>
                    {breeds.map((item)=>{
                    return <option key={item.value} value={item.value}>{item.value}</option>
                })}
                </select>
            </label>
            <label className="form">
                Location:
                <select ref={(ref)=>{this.locationRef = ref}} >
                  <option value={'Alabama'}>Alabama</option>
                  <option value={'Alaska'}>Alaska</option>
                  <option value={'Arizona'}>Arizona</option>
                  <option value={'Arkansas'}>Arkansas</option>
                  <option value={'California'}>California</option>
                  <option value={'Colorado'}>Colorado</option>
                  <option value={'Conneticut'}>Conneticut</option>
                  <option value={'Deleware'}>Delaware</option>
                  <option value={'Florida'}>Florida</option>
                  <option value={'Georgia'}>Georgia</option>
                  <option value={'Hawaii'}>Hawaii</option>
                  <option value={'Idaho'}>Idaho</option>
                  <option value={'Illinois'}>Illinois</option>
                  <option value={'Indiana'}>Indiana</option>
                  <option value={'Iowa'}>Iowa</option>
                  <option value={'Kansas'}>Kansas</option>
                  <option value={'Kentucky'}>Kentucky</option>
                  <option value={'Louisiana'}>Louisiana</option>
                  <option value={'Maine'}>Maine</option>
                  <option value={'Maryland'}>Maryland</option>
                  <option value={'Massachusetts'}>Massachusetts</option>
                  <option value={'Michigan'}>Michigan</option>
                  <option value={'Minnesota'}>Minnesota</option>
                  <option value={'Mississippi'}>Mississippi</option>
                  <option value={'Missouri'}>Missouri</option>
                  <option value={'Montana'}>Montana</option>
                  <option value={'Nebraska'}>Nebraska</option>
                  <option value={'Nevada'}>Nevada</option>
                  <option value={'New Hampshire'}>New Hampshire</option>
                  <option value={'New Jersey'}>New Jersey</option>
                  <option value={'New Mexico'}>New Mexico</option>
                  <option value={'New York'}>New York</option>
                  <option value={'North Carolina'}>North Carolina</option>
                  <option value={'North Dakota'}>North Dakota</option>
                  <option value={'Ohio'}>Ohio</option>
                  <option value={'Oklahoma'}>Oklahoma</option>
                  <option value={'Oregon'}>Oregon</option>
                  <option value={'Pennsylvania'}>Pennsylvania</option>
                  <option value={'Puerto Rico'}>Puerto Rico</option>
                  <option value={'Rhode Island'}>Rhode Island</option>
                  <option value={'South Carolina'}>South Carolina</option>
                  <option value={'South Dakota'}>South Dakota</option>
                  <option value={'Tennessee'}>Tennessee</option>
                  <option value={'Texas'}>Texas</option>
                  <option value={'Utah'}>Utah</option>
                  <option value={'Vermont'}>Vermont</option>
                  <option value={'Virginia'}>Virginia</option>
                  <option value={'Washington'}>Washington</option>
                  <option value={'West Virginia'}>West Virginia</option>
                  <option value={'Wisconsin'}>Wisconin</option>
                  <option value={'Wyoming'}>Wyoming</option>
                </select>
            </label>
            <label className="form">
                Age:
                <select ref={(ref)=>{this.ageRef = ref}}>
                    <option value={'Baby'}>Baby</option>
                    <option value={'Young'}>Young</option>
                    <option value={'Adult'}>Adult</option>
                    <option value={'Senior'}>Senior</option>
                </select>
            </label>
            <label className="form">
                Sex:
                <select ref={(ref)=>{this.sexRef = ref}}>
                  <option value={'M'}>M</option>
                  <option value={'F'}>F</option>
                  </select>
            </label>
            <label className="form">
                Size:
                <select ref={(ref)=>{this.sizeRef = ref}}>
                  <option value={'S'}>S</option>
                  <option value={'M'}>M</option>
                  <option value={'L'}>L</option>
                  <option value={'XL'}>XL</option>
                </select>
            </label>
            <label>
                <button onClick={this.findPets}>Submit</button>
            </label>
            <div style={{overflow:'auto',width:'80%',margin:'auto'}}>
                { pets.map(this.petRenderer) }
            </div>
        </div>
    );
  }
}

export default DogForm;
