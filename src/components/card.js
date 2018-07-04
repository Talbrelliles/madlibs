import React, {Component} from 'react';

import Input from './input';

class Card extends Component{
   
   constructor(){
       super()
       
       this.state = {
           color: '',
           pluralNoun: '',
           adjectiveOne: '',
           celebOne: '',
           //new items
           adjectiveTwo: '',
           nounOne: '',
           numberOne: '',
           numberTwo: '',
           nounTwo: '',
           adjectiveThree: '',
           celebTwo: '',
           celebThree: '',
           adjectiveFour: '',
           nounThree: '',
           celebFour: '',
           adjectiveFive: ''
           
           
       }
       this.handleInputChange = this.handleInputChange.bind(this);
   }
   
   handleInputChange(event){
       
       this.setState({ [event.target.name]: event.target.value})
   }
   
   
    render() {
        
        const inputData =[
         
            {title: 'Color',state:this.state.color, name: 'color'},
             {title: 'Plural Noun',state:this.state.pluralNoun, name: 'pluralNoun'},
               {title: 'Adjective',state:this.state.adjectiveOne, name: 'adjectiveOne'},
                  {title: 'Celeberity',state:this.state.celebOne, name: 'celebOne'},
                 
                  {title: 'Adjective',state:this.state.adjectiveTwo, name: 'adjectiveTwo'},
                  {title: 'Noun',state:this.state.NounOne, name: 'nounOne'},
             {title: 'Number',state:this.state.numberOne, name: 'numberOne'},
               {title: 'Number',state:this.state.numberTwo, name: 'numberTwo'},
                
                  {title: 'Noun',state:this.state.nounTwo, name: 'nounTwo'},
             {title: 'Adjective',state:this.state.adjectiveThree, name: 'adjectiveThree'},
               {title: 'Celeberity',state:this.state.celebTwo, name: 'celebTwo'},
                  {title: 'Celeberity',state:this.state.celebThree, name: 'celebThree'},
                  
                  {title: 'Adjective',state:this.state.adjectiveFour, name: 'adjectiveFour'},
             {title: 'Noun',state:this.state.nounThree, name: 'nounThree'},
               {title: 'Celeberity',state:this.state.celebFour, name: 'celebFour'},
                  {title: 'Adjective',state:this.state.adjectiveFive, name: 'adjectiveFive'}
            ]
             
         
         //HEY TALMAGE YOU ARE AT 7:10 IN THE VIDEO
         
        
      //  { Input('Color', this.state.color,this.handleInputChange, 'color') }
         //     { Input('Plural Noun', this.state.pluralNoun, this.handleInputChange, 'pluralNoun') }
        //      { Input('Adjective', this.state.adjectiveOne,this.handleInputChange, 'adjectiveOne') }
        //      { Input('Celeberity', this.state.celebOne, this.handleInputChange, 'celebOne') }
        
        return(
            <div className="card">
            
            {
            inputData.map(data => Input( (data), this.handleInputChange ))
            }
            
           
            </div>
            )
    }
}

export default Card;