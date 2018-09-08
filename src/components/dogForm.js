import React from 'react';

class DogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state  = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
      this.setstate({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }


  render() {
    return (
      <form className="dogform" onSubmit={this.handleSubmit}>
        <label>
          Breed:
          <input type="text" value={this.state.value} />
          </label>
          <label>
          Location:
          <input type="text" value={this.state.value} placeholder="Zip or City, State" />
          </label>
          <label>
          Gender:
          <input type="text" value={this.state.value} placeholder="M or F" />
          </label>
          <label>
            Age:
            <input type="text" value={this.state.value} placeholder="Baby, Young, Adult, Senior" />
          </label>
          <label>
            Size:
            <input type="text" value={this.state.value} placeholder="S, M, L or XL" />
          </label>
          <label>
          <input type="submit" value="Submit" />
          </label>
        </form>
    );
  }
}

export default DogForm;
