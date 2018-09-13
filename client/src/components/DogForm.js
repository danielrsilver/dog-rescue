import React from 'react';
import {API_URL, getQueryParams, getProp} from "./Utils";
import '../css/DogForm.css'

export default class DogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: ['-'],
      pets: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findPets = this.findPets.bind(this);
  }

  componentDidMount() {
    fetch(`${API_URL}/breeds`).then(resp => resp.json()).then((resp) => {
      const breeds = resp.petfinder.breeds.breed.map((item) => {
        return {value: item['$t']};
      })
      this.setState({breeds})
    })
  }

  handleChange(event) {
    this.setstate({value: event.target.value});
  }

  findPets() {
    const breed = this.breedRef.value;
    const age = this.ageRef.value;
    const sex = this.sexRef.value;
    const size = this.sizeRef.value;
    const location = this.locationRef.value;

    if (!location) {
      alert("Location is required");
      return;
    }
    const query = {
      breed,
      location,
      age,
      sex,
      size,
    };
    fetch(`${API_URL}/find?${getQueryParams(query)}`).then(resp => resp.json()).then((resp) => {
      if (!resp.petfinder || !resp.petfinder.pets) {
        alert("Provided arguments are incorrect :)");
        return;
      }
      const {
        petfinder: {
          pets: {
            pet: pets
          }
        }
      } = resp;
      this.setState({pets})
    })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  petRenderer = (pet) => {
    let {
      media,
      age,
      id: {
        $t: petId
      },
      name,
      sex,
      size,
      breeds: {
        breed
      },
      contact: {
        city,
        state,
        location,
        email,
        phone
      },
      description
    } = pet;
    age && (age = getProp(age));
    name && (name = getProp(name));
    sex && (sex = getProp(sex));
    size && (size = getProp(size));
    breed && (breed = getProp(breed));
    city && (city = getProp(city));
    state && (state = getProp(state));
    location && (location = getProp(location));
    email && (email = getProp(email));
    phone && (phone = getProp(phone));
    description && (description = getProp(description));

    let photo = '';

    if (media && media.photos && media.photos.photo) {
      let {
        photos: {
          photo: photoObj
        }
      } = media;
      photo = getProp(photoObj[2]);
    } else {
      return null
    }

    return (<div className="ui link stackable cards" key={petId}>
      <div className='card' key={petId}>
        <div className="image">
          <a href={`pets/${petId}`}><img className='dogPics' alt='dogPictures' src={photo}/></a>
        </div>
        <div className="content">
          <div className="header">
            <a style={{
                color: '#000000'
              }} href={`pets/${petId}`} target="_blank">{name}</a>
          </div>
          <div className="meta">
            <span className="location">{city}, {state}
              {location}</span>
          </div>
        </div>
      </div>
    </div>);
  }

  render() {
    const {breeds, pets} = this.state;
    return (<div className="dogform">
      <div className="formOptions">

        <label className="form">
          <div className="ui fluid form">
            <div className="field location">
              <label className="zip">Zip Code</label>
              <input type="text" placeholder="ex. 33130" ref={(ref) => {
                  this.locationRef = ref
                }} />
            </div>
          </div>
        </label>

        <label className="form" id="form-breed">
          <div className="options breed">
            <p>Breed</p>
            <select className="ui fluid search dropdown" multiple="" ref={(ref) => {
                this.breedRef = ref
              }}>
              {
                breeds.map((item) => {
                  return <option key={item.value} value={item.value}>{item.value}</option>
                })
              }
            </select>
          </div>
        </label>
        <label className="form">
          <div className="options">
            <p>Gender</p>
            <select className="ui fluid search dropdown" ref={(ref) => {
                this.sexRef = ref
              }}>
              <option value={''}>Any</option>
              <option value={'M'}>Male</option>
              <option value={'F'}>Female</option>
            </select>
          </div>
        </label>
        <label className="form">
          <div className="options size">
            <p>Size</p>
            <select className="ui fluid search dropdown" ref={(ref) => {
                this.sizeRef = ref
              }}>
              <option value={''}>Any</option>
              <option value={'S'}>Small</option>
              <option value={'M'}>Medium</option>
              <option value={'L'}>Large</option>
              <option value={'XL'}>Extra Large</option>
            </select>
          </div>
        </label>

        <label className="form age">
          <div className="options age">
            <p>Age</p>
            <select className="ui fluid search dropdown" ref={(ref) => {
                this.ageRef = ref
              }}>
              <option value={''}>Any</option>
              <option value={'Baby'}>Baby</option>
              <option value={'Young'}>Young</option>
              <option value={'Adult'}>Adult</option>
            </select>
          </div>
        </label>

        <label className="search-button">
          <div className="ui blue animated button" tabindex="0" onClick={this.findPets}>
            <div className="visible content">
              Search</div>
            <div className="hidden content">
              <i className="right arrow icon"></i>
            </div>
          </div>
        </label>
      </div>
      <div className="ui divider"></div>
      <div className="petRenderer">
        {pets && pets.map(this.petRenderer)}
        {!pets && "No search results :)"}
      </div>
    </div>);
  }
}
