import React from 'react';
import {API_URL, getProp} from "./Utils";
import '../css/DogDetails.css';

export default class DogDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: null
    };
    this.findPet = this.findPet.bind(this);
  }

  componentDidMount() {
    this.findPet();
  }

  findPet() {
    const id = this.props.match.params[0];
    fetch(`${API_URL}/get/${id}`).then(resp => resp.json()).then((resp) => {
      if (!resp.petfinder || !resp.petfinder.pet) {
        alert("Your search results returned no matches");
        return;
      }
      const {petfinder: {
          pet
        }} = resp;
      this.setState({pet})
    })
  }

  petRenderer = (pet) => {
    let {
      media,
      age,
      id: {
        $t: petId
      },
      contact: {
        city,
        state,
        zip,
        email,
        phone
      },
      name,
      size,
      sex,
      description,
      breeds: {
        breed
      }
    } = pet;
    age && (age = getProp(age));
    name && (name = getProp(name));
    sex && (sex = getProp(sex));
    size && (size = getProp(size));
    city && (city = getProp(city));
    state && (state = getProp(state));
    zip && (zip = getProp(zip));
    email && (email = getProp(email));
    phone && (phone = getProp(phone));
    description && (description = getProp(description));
    let photo = '';
    if (breed) {
      breed = [].concat(breed);
    }

    if (media && media.photos && media.photos.photo) {
      let {
        photos: {
          photo: photoObj
        }
      } = media;
      photo = getProp(photoObj[3]);
    } else {
      return null
    }
    return (<div key={petId}>
      <div className="imageContainer">
        <img alt="dog" src={photo} img="img" className="ui centered medium circular image"/>
      </div>
      <div className="dogInformation">
        <div className="ui message attached">
          <div className={'fieldsHeader'}>Name: {name}</div>
          <div className={'fieldsHeader'}>Breed: {
              breed && breed.map((item, index) => {
                let separator = ' ,';
                if ((breed.length - 1 === index) || index === 0) {
                  separator = '';
                }
                return getProp(item) + separator;
              })
            }</div>
          {!breed && <div className={'fieldsLabel'}>N/A</div>}
          <div className={'fieldsHeader'}>Gender: {sex}</div>
          <div className={'fieldsHeader'}>Size: {size}</div>
          <div className={'fieldsHeader'}>Age: {age}
          </div>
          <div className={'fieldsHeader'}>Location: {city}, {state}
            {zip}</div>
          <div className={'fieldsHeader'}>Phone: {phone}</div>
          <div className={'fieldsHeader'}>Email: {email}</div>
        </div>
        <div className="ui attached bottom message" style={{
            'margin-top' : '20px',
            'text-align' : 'justify'
          }}>
          <div className="description">Description:
          </div>
          <div className={'fieldsLabel'}>{description || 'There is no description available for this dog :) Please contact the owner for further information.'}</div>
        </div>
      </div>
    </div>);
  }

  render() {
    const {pet} = this.state;
    return (<div className="dogform">
      {pet && this.petRenderer(pet)}
      {!pet && 'Please wait, we are trying to retrieve the information !'}
    </div>);
  }
}
