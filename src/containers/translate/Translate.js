import React, { Component } from 'react';
import ShowTranslate from './ShowTranslate';
import TranslateField from './TranslateField'

class Translate extends Component {
    render(){
        return (
            <div className='container'>
                <div className='container'>
                    <TranslateField />
                </div>
                <div className='container'>
                    <ShowTranslate />
                </div>
            </div>
        )
    }
} 

export default Translate;