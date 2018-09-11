import React from 'react';
import {API_URL, getQueryParams, getProp} from "./Utils";
import '../css/DogForm.css'
import DogForm from './DogForm'


return (<div class='dogInfo' key={id}>
<img class='dogPics' alt='dogPictures' src={photo}/>
  <div>
    <span>Name: </span>
    <span>{name}</span>
  </div>
  <div>
    <span>Location: </span>
    <span>{city}, {state} {zip}</span>
  </div>
  <div>
    <span>Breed: </span>
    <span>{breed}</span>
  </div>
  <div>
    <span>Sex: </span>
    <span>{sex}</span>
  </div>
  <div>
    <span>Size: </span>
    <span>{size}</span>
  </div>
  <div>
    <span>Age: </span>
    <span>{age}</span>
  </div>
  <div>
    <span>Phone: </span>
    <span>{phone}</span>
  </div>
  <div>
    <span>Email: </span>
    <span>{email}</span>
  </div>
  <div>
    <span>ID#: </span>
    <span>{id}</span>
  </div>
  </div>);
}

  render() {
  const { breeds, pets } = this.state;
  return (
    <div class='petRenderer'>
        { pets.map(this.petRenderer) }
    </div>
    );
  }
}

export default DogPage;
