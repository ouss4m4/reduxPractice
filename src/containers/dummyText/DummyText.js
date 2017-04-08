import React, { Component } from 'react';
import ShowText from './ShowText';
import TextGenerate from './TextGenerate'
import './style.css'

class dummyText extends Component {
    render(){
        return (
            <div className="container"> 
                <TextGenerate />
                <ShowText />
            </div>
        )
    }
} 

export default dummyText;