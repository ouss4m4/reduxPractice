import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from '../../components/translate/Text'
import './translation.css'

class ShowTranslate extends Component{
     render(){
        const { isFetching, fetched} = this.props.translate;
        
            if (isFetching) {
                return (<i className="fa fa-spinner fa-spin" aria-hidden="true"></i> )
            }
            if (fetched) {
                return (<div className='container'>
                    <Text text={this.props.translate.translate.text[0]}/> 
                    </div>
                )
            } 
            return (<div className="container">
                <h3> type in a text to translate, and select langage </h3>
                </div>
            )
       
    }
}

const mapStateToProps = (state) =>  {
    return {
    translate : state.Translate
    }
}


export default connect(mapStateToProps)(ShowTranslate);