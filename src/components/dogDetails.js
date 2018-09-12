import React from 'react';
import {API_URL, getQueryParams, getProp} from "./Utils";

class DogDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state  = { pet:null };

        this.findPet = this.findPet.bind(this);
    }

    componentDidMount(){
        this.findPet();
    }


    findPet(){
        const id = this.props.match.params[0];
        fetch(`${API_URL}/get/${id}`).then(resp => resp.json()).then((resp) => {
            if(!resp.petfinder || !resp.petfinder.pet){
                alert("Your search results returned no matches");
                return;
            }
            const { petfinder : {  pet  } } = resp;
            this.setState({pet})
        })
    }

    petRenderer = (pet) => {
        let { media, age,id:{$t:petId },contact,name,sex,description,breeds:{breed} }= pet;
        age && (age=getProp(age));
        name && (name  = getProp(name));
        sex && (sex  = getProp(sex));
        description && (description  = getProp(description));
        let photo = '';
        if(breed){
            breed = [].concat(breed);
        }
        if(contact && contact.phone){
            contact = getProp(contact.phone);
        }else if (contact){
            contact = getProp(contact.email);
        }
        if(media && media.photos && media.photos.photo){
            let { photos : { photo:photoObj } } = media;
            photo = getProp(photoObj[3]);
        } else {
            return null
        }
        return (<div  style={{width:'70%',margin:'auto',height:'300px','margin-top':'30px'}} key={petId}>
            <div>
                <div style={{width:'50%',float:'left'}}>
                    <div>
                        <span className={'fieldsHeader'}>Breeds : </span>
                        <span className={'fieldsLabel'}>{breed && breed.map((item,index)=>{
                            let separator = ' ,';
                            if((breed.length - 1 === index) || index === 0 ){
                                separator = '';
                            }
                           return getProp(item) + separator;
                        })}</span>
                        {!breed && <span className={'fieldsLabel'}>N/A</span>}
                    </div>
                    <div>
                <span className={'fieldsHeader'}>Name : </span>
                <span className={'fieldsLabel'}>{name}</span>
                </div>
            <div>
                <span className={'fieldsHeader'}>Sex : </span>
                <span className={'fieldsLabel'}>{sex}</span>
            </div>
            <div>
                <span className={'fieldsHeader'}>Age : </span>
                <span className={'fieldsLabel'}>{age}</span>
            </div>
            <div>
                <span className={'fieldsHeader'}>Contact : </span>
                <span className={'fieldsLabel'}>{contact}</span>
            </div>
            </div>
                <div className="imageContainer" style={{width:'50%',float:'right'}}>
                    <img  style={{display:'block',maxWidth:'100%',maxHeight:'400px'}} src={photo} />
                </div>
            </div>
            <div style={{'margin-top':'20px','text-align': 'justify'}}>
                <span className={'fieldsHeader'}>Description : </span>
                <span className={'fieldsLabel'} >{description || 'There is no description available for this dog :) Please contact the owner for further information.'}</span>
            </div>
        </div>);
    }

    render() {
        const { pet } = this.state;
        return (
            <div className="dogform">
                {pet && this.petRenderer(pet)}
                {!pet && 'Please wait, we are trying to retrieve the information !'}
            </div>
        );
    }
}

export default DogDetails;
