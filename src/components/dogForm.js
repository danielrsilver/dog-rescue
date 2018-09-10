import React, { Component } from 'react';

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
            <option value="">Any</option>
            <option value="Affenpinscher">Affenpinscher</option>
            <option value="Afghan Hound">Afghan Hound</option>
            <option value="Airedale Terrier">Airedale Terrier</option>
              <option value="Akbash">Akbash</option>
              <option value="Akita">Akita</option>
              <option value="Alaskan Malamute">Alaskan Malamute</option>
              <option value="American Bulldog">American Bulldog</option>
              <option value="American Eskimo Dog">American Eskimo Dog</option>
              <option value="American Hairless Terrier">American Hairless Terrier</option>
              <option value="American Staffordshire Terrier">American Staffordshire Terrier</option>
              <option value="American Water Spaniel">American Water Spaniel</option>
              <option value="Anatolian Shepherd">Anatolian Shepherd</option>
              <option value="Appenzell Mountain Dog">Appenzell Mountain Dog</option>
              <option value="Australian Cattle Dog / Blue Heeler">Australian Cattle Dog / Blue Heeler</option>
              <option value="Australian Kelpie">Australian Kelpie</option>
              <option value="Australian Shepherd">Australian Shepherd</option>
              <option value="Australian Terrier">Australian Terrier</option>
              <option value="Basenji">Basenji</option>
              <option value="Basset Hound">Basset Hound</option>
              <option value="Beagle">Beagle</option>
              <option value="Bearded Collie">Bearded Collie</option>
              <option value="Beauceron">Beauceron</option>
              <option value="Bedlington Terrier">Bedlington Terrier</option>
              <option value="Belgian Shepherd / Laekenois">Belgian Shepherd / Laekenois</option>
              <option value="Belgian Shepherd / Malinois">Belgian Shepherd / Malinois</option>
              <option value="Belgian Shepherd / Sheepdog">Belgian Shepherd / Sheepdog</option>
              <option value="Belgian Shepherd / Tervuren">Belgian Shepherd / Tervuren</option>
              <option value="Bernese Mountain Dog">Bernese Mountain Dog</option>
              <option value="Bichon Frise">Bichon Frise</option>
              <option value="Black and Tan Coonhound">Black and Tan Coonhound</option>
              <option value="Black Labrador Retriever">Black Labrador Retriever</option>
              <option value="Black Mouth Cur">Black Mouth Cur</option>
              <option value="Black Russian Terrier">Black Russian Terrier</option>
              <option value="Bloodhound">Bloodhound</option>
              <option value="Blue Lacy">Blue Lacy</option>
              <option value="Bluetick Coonhound">Bluetick Coonhound</option>
              <option value="Boerboel">Boerboel</option>
              <option value="Bolognese">Bolognese</option>
              <option value="Border Collie">Border Collie</option>
              <option value="Border Terrier">Border Terrier</option>
              <option value="Borzoi">Borzoi</option>
              <option value="Boston Terrier">Boston Terrier</option>
              <option value="Bouvier des Flanders">Bouvier des Flanders</option>
              <option value="Boxer">Boxer</option>
              <option value="Boykin Spaniel">Boykin Spaniel</option>
              <option value="Briard">Briard</option>
              <option value="Brittany Spaniel">Brittany Spaniel</option>
              <option value="Brussels Griffon">Brussels Griffon</option>
              <option value="Bull Terrier">Bull Terrier</option>
              <option value="Bullmastiff">Bullmastiff</option>
              <option value="Cairn Terrier">Cairn Terrier</option>
              <option value="Canaan Dog">Canaan Dog</option>
              <option value="Cane Corso Mastiff">Cane Corso Mastiff</option>
              <option value="Carolina Dog">Carolina Dog</option>
              <option value="Catahoula Leopard Dog">Catahoula Leopard Dog</option>
              <option value="Cattle Dog">Cattle Dog</option>
              <option value="Caucasian Sheepdog / Caucasian Ovtcharka">Caucasian Sheepdog / Caucasian Ovtcharka</option>
              <option value="Cavalier King Charles Spaniel">Cavalier King Charles Spaniel</option>
              <option value="Chesapeake Bay Retriever">Chesapeake Bay Retriever</option>
              <option value="Chihuahua">Chihuahua</option>
              <option value="Chinese Crested Dog">Chinese Crested Dog</option>
              <option value="Chinese Foo Dog">Chinese Foo Dog</option>
              <option value="Chinook">Chinook</option>
              <option value="Chocolate Labrador Retriever">Chocolate Labrador Retriever</option>
              <option value="Chow Chow">Chow Chow</option>
              <option value="Cirneco dell'Etna">Cirneco dell'Etna</option>
              <option value="Clumber Spaniel">Clumber Spaniel</option>
              <option value="Cockapoo">Cockapoo</option>
              <option value="Cocker Spaniel">Cocker Spaniel</option>
              <option value="Collie">Collie</option>
              <option value="Coonhound">Coonhound</option>
              <option value="Corgi">Corgi</option>
              <option value="Coton de Tulear">Coton de Tulear</option>
              <option value="Curly-Coated Retriever">Curly-Coated Retriever</option>
              <option value="Dachshund">Dachshund</option>
              <option value="Dalmatian">Dalmatian</option>
              <option value="Dandi Dinmont Terrier">Dandi Dinmont Terrier</option>
              <option value="Doberman Pinscher">Doberman Pinscher</option>
              <option value="Dogo Argentino">Dogo Argentino</option>
              <option value="Dogue de Bordeaux">Dogue de Bordeaux</option>
              <option value="Dutch Shepherd">Dutch Shepherd</option>
              <option value="English Bulldog">English Bulldog</option>
              <option value="English Cocker Spaniel">English Cocker Spaniel</option>
              <option value="English Coonhound">English Coonhound</option>
              <option value="English Pointer">English Pointer</option>
              <option value="English Setter">English Setter</option>
              <option value="English Shepherd">English Shepherd</option>
              <option value="English Springer Spaniel">English Springer Spaniel</option>
              <option value="English Toy Spaniel">English Toy Spaniel</option>
              <option value="Entlebucher">Entlebucher</option>
              <option value="Eskimo Dog">Eskimo Dog</option>
              <option value="Feist">Feist</option>
              <option value="Field Spaniel">Field Spaniel</option>
              <option value="Fila Brasileiro">Fila Brasileiro</option>
              <option value="Finnish Lapphund">Finnish Lapphund</option>
              <option value="Finnish Spitz">Finnish Spitz</option>
              <option value="Flat-Coated Retriever">Flat-Coated Retriever</option>
              <option value="Fox Terrier">Fox Terrier</option>
              <option value="Foxhound">Foxhound</option>
              <option value="French Bulldog">French Bulldog</option>
              <option value="Galgo Spanish Greyhound">Galgo Spanish Greyhound</option>
              <option value="German Pinscher">German Pinscher</option>
              <option value="German Shepherd Dog">German Shepherd Dog</option>
              <option value="German Shorthaired Pointer">German Shorthaired Pointer</option>
              <option value="German Spitz">German Spitz</option>
              <option value="German Wirehaired Pointer">German Wirehaired Pointer</option>
              <option value="Giant Schnauzer">Giant Schnauzer</option>
              <option value="Glen of Imaal Terrier">Glen of Imaal Terrier</option>
              <option value="Golden Retriever">Golden Retriever</option>
              <option value="Gordon Setter">Gordon Setter</option>
              <option value="Great Dane">Great Dane</option>
              <option value="Great Pyrenees">Great Pyrenees</option>
              <option value="Greater Swiss Mountain Dog">Greater Swiss Mountain Dog</option>
              <option value="Greyhound">Greyhound</option>
              <option value="Hamiltonstovare">Hamiltonstovare</option>
              <option value="Harrier">Harrier</option>
              <option value="Havanese">Havanese</option>
              <option value="Hound">Hound</option>
              <option value="Hovawart">Hovawart</option>
              <option value="Husky">Husky</option>
              <option value="Ibizan Hound">Ibizan Hound</option>
              <option value="Icelandic Sheepdog">Icelandic Sheepdog</option>
              <option value="Illyrian Sheepdog">Illyrian Sheepdog</option>
              <option value="Irish Setter">Irish Setter</option>
              <option value="Irish Terrier">Irish Terrier</option>
              <option value="Irish Water Spaniel">Irish Water Spaniel</option>
              <option value="Irish Wolfhound">Irish Wolfhound</option>
              <option value="Italian Greyhound">Italian Greyhound</option>
              <option value="Italian Spinone">Italian Spinone</option>
              <option value="Jack Russell Terrier">Jack Russell Terrier</option>
              <option value="Jack Russell Terrier (Parson)">Jack Russell Terrier (Parson)</option>
              <option value="Japanese Chin">Japanese Chin</option>
              <option value="Jindo">Jindo</option>
              <option value="Kai Dog">Kai Dog</option>
              <option value="Karelian Bear Dog">Karelian Bear Dog</option>
              <option value="Keeshond">Keeshond</option>
              <option value="Kerry Blue Terrier">Kerry Blue Terrier</option>
              <option value="Kishu">Kishu</option>
              <option value="Klee Kai">Klee Kai</option>
              <option value="Komondor">Komondor</option>
              <option value="Kuvasz">Kuvasz</option>
              <option value="Kyi Leo">Kyi Leo</option>
              <option value="Labrador Retriever">Labrador Retriever</option>
              <option value="Lakeland Terrier">Lakeland Terrier</option>
              <option value="Lancashire Heeler">Lancashire Heeler</option>
              <option value="Leonberger">Leonberger</option>
              <option value="Lhasa Apso">Lhasa Apso</option>
              <option value="Lowchen">Lowchen</option>
              <option value="Maltese">Maltese</option>
              <option value="Manchester Terrier">Manchester Terrier</option>
              <option value="Maremma Sheepdog">Maremma Sheepdog</option>
              <option value="Mastiff">Mastiff</option>
              <option value="McNab">McNab</option>
              <option value="Miniature Pinscher">Miniature Pinscher</option>
              <option value="Miniature Schnauzer">Miniature Schnauzer</option>
              <option value="Mixed Breed">Mixed Breed</option>
              <option value="Mountain Cur">Mountain Cur</option>
              <option value="Mountain Dog">Mountain Dog</option>
              <option value="Munsterlander">Munsterlander</option>
              <option value="Neapolitan Mastiff">Neapolitan Mastiff</option>
              <option value="New Guinea Singing Dog">New Guinea Singing Dog</option>
              <option value="Newfoundland Dog">Newfoundland Dog</option>
              <option value="Norfolk Terrier">Norfolk Terrier</option>
              <option value="Norwegian Buhund">Norwegian Buhund</option>
              <option value="Norwegian Elkhound">Norwegian Elkhound</option>
              <option value="Norwegian Lundehund">Norwegian Lundehund</option>
              <option value="Norwich Terrier">Norwich Terrier</option>
              <option value="Nova Scotia Duck Tolling Retriever">Nova Scotia Duck Tolling Retriever</option>
              <option value="Old English Sheepdog">Old English Sheepdog</option>
              <option value="Otterhound">Otterhound</option>
              <option value="Papillon">Papillon</option>
              <option value="Patterdale Terrier / Fell Terrier">Patterdale Terrier / Fell Terrier</option>
              <option value="Pekingese">Pekingese</option>
              <option value="Peruvian Inca Orchid">Peruvian Inca Orchid</option>
              <option value="Petit Basset Griffon Vendeen">Petit Basset Griffon Vendeen</option>
              <option value="Pharaoh Hound">Pharaoh Hound</option>
              <option value="Pit Bull Terrier">Pit Bull Terrier</option>
              <option value="Plott Hound">Plott Hound</option>
              <option value="Podengo Portugueso">Podengo Portugueso</option>
              <option value="Pointer">Pointer</option>
              <option value="Polish Lowland Sheepdog">Polish Lowland Sheepdog</option>
              <option value="Pomeranian">Pomeranian</option>
              <option value="Poodle">Poodle</option>
              <option value="Portuguese Water Dog">Portuguese Water Dog</option>
              <option value="Presa Canario">Presa Canario</option>
              <option value="Pug">Pug</option>
              <option value="Puli">Puli</option>
              <option value="Pumi">Pumi</option>
              <option value="Rat Terrier">Rat Terrier</option>
              <option value="Redbone Coonhound">Redbone Coonhound</option>
              <option value="Retriever">Retriever</option>
              <option value="Rhodesian Ridgeback">Rhodesian Ridgeback</option>
              <option value="Rottweiler">Rottweiler</option>
              <option value="Rough Collie">Rough Collie</option>
              <option value="Saint Bernard / St. Bernard">Saint Bernard / St. Bernard</option>
              <option value="Saluki">Saluki</option>
              <option value="Samoyed">Samoyed</option>
              <option value="Sarplaninac">Sarplaninac</option>
              <option value="Schipperke">Schipperke</option>
              <option value="Schnauzer">Schnauzer</option>
              <option value="Scottish Deerhound">Scottish Deerhound</option>
              <option value="Scottish Terrier Scottie">Scottish Terrier Scottie</option>
              <option value="Sealyham Terrier">Sealyham Terrier</option>
              <option value="Setter">Setter</option>
              <option value="Shar Pei">Shar Pei</option>
              <option value="Sheep Dog">Sheep Dog</option>
              <option value="Shepherd">Shepherd</option>
              <option value="Shetland Sheepdog Sheltie">Shetland Sheepdog Sheltie</option>
              <option value="Shiba Inu">Shiba Inu</option>
              <option value="Shih Tzu">Shih Tzu</option>
              <option value="Siberian Husky">Siberian Husky</option>
              <option value="Silky Terrier">Silky Terrier</option>
              <option value="Skye Terrier">Skye Terrier</option>
              <option value="Sloughi">Sloughi</option>
              <option value="Smooth Collie">Smooth Collie</option>
              <option value="Smooth Fox Terrier">Smooth Fox Terrier</option>
              <option value="South Russian Ovtcharka">South Russian Ovtcharka</option>
              <option value="Spaniel">Spaniel</option>
              <option value="Spanish Water Dog">Spanish Water Dog</option>
              <option value="Spitz">Spitz</option>
              <option value="Staffordshire Bull Terrier">Staffordshire Bull Terrier</option>
              <option value="Standard Poodle">Standard Poodle</option>
              <option value="Standard Schnauzer">Standard Schnauzer</option>
              <option value="Sussex Spaniel">Sussex Spaniel</option>
              <option value="Swedish Vallhund">Swedish Vallhund</option>
              <option value="Terrier">Terrier</option>
              <option value="Thai Ridgeback">Thai Ridgeback</option>
              <option value="Tibetan Mastiff">Tibetan Mastiff</option>
              <option value="Tibetan Spaniel">Tibetan Spaniel</option>
              <option value="Tibetan Terrier">Tibetan Terrier</option>
              <option value="Tosa Inu">Tosa Inu</option>
              <option value="Toy Fox Terrier">Toy Fox Terrier</option>
              <option value="Treeing Walker Coonhound">Treeing Walker Coonhound</option>
              <option value="Vizsla">Vizsla</option>
              <option value="Weimaraner">Weimaraner</option>
              <option value="Welsh Corgi">Welsh Corgi</option>
              <option value="Welsh Springer Spaniel">Welsh Springer Spaniel</option>
              <option value="Welsh Terrier">Welsh Terrier</option>
              <option value="West Highland White Terrier Westie">West Highland White Terrier Westie</option>
              <option value="Wheaten Terrier">Wheaten Terrier</option>
              <option value="Whippet">Whippet</option>
              <option value="White German Shepherd">White German Shepherd</option>
              <option value="Wire Fox Terrier">Wire Fox Terrier</option>
              <option value="Wirehaired Dachshund">Wirehaired Dachshund</option>
              <option value="Wirehaired Pointing Griffon">Wirehaired Pointing Griffon</option>
              <option value="Wirehaired Terrier">Wirehaired Terrier</option>
              <option value="Xoloitzcuintle / Mexican Hairless">Xoloitzcuintle / Mexican Hairless</option>
              <option value="Yellow Labrador Retriever">Yellow Labrador Retriever</option>
              <option value="Yorkshire Terrier Yorkie">Yorkshire Terrier Yorkie</option>
          </select>
          </label>

          <label>
          Gender:
          <select value={this.state.gender} name="gender" onChange={this.handleChange}>
            <option value="">Any</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          </label>

          <label>
          Age:
          <select value={this.state.age} name="age" onChange={this.handleChange}>
            <option value="">Any</option>
            <option value="baby">Baby</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
          </select>
          </label>

          <label>
          Size:
          <select value={this.state.size} name="size" onChange={this.handleChange}>
            <option value="">Any</option>
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
