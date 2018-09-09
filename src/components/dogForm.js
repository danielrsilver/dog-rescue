import React from 'react';
// import BreedList from 'BreedList'

class DogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {
      location: '',
      breed: '',
      gender: '',
      age: '',
      size: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange (event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

      this.setState({
        [name]: value
      });
  }
  handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
  }

  render() {
    return (
      <div className="formField">
        <form className="form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>
          Location:
          <input type="text" name="location" value={this.state.location} onChange={this.handleChange} placeholder="Zip or City, State" />
          </label>

          <label>
          Breed:
          <select value={this.state.breed} name="breed" onChange={this.handleChange}>
            <option value="any">Any</option>
            <option value="BreedList">BreedList</option>
          </select>
          </label>

          <label>
          Gender:
          <select value={this.state.gender} name="gender" onChange={this.handleChange}>
            <option value="any">Any</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          </label>

          <label>
          Age:
          <select value={this.state.age} name="age" onChange={this.handleChange}>
            <option value="any">Any</option>
            <option value="baby">Baby</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
          </select>
          </label>

          <label>
          Size:
          <select value={this.state.size} name="size" onChange={this.handleChange}>
            <option value="any">Any</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>
          </label>

          <label>
          <input type="submit" value="Search" />
          </label>

        </div>
        </form>
      </div>

    );
  }
}


export default DogForm;
