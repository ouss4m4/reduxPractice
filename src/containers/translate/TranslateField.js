import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Selection } from '../../components/translate/Selection'
import { fetchTranslation } from '../../actions/translateActions'



class TranslateField extends Component {
    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleTranslate = this.handleTranslate.bind(this)
        this.state = { language : '', text : '' }
    }
    render(){
        return(
            <Selection 
                onSelect={this.handleSelect}
                onChange={this.handleChange}
                onTranslate={this.handleTranslate}
                />
        )
    }
    handleSelect(e) {
        this.setState({
            ...this.state,
            language : e.target.value
        })
    }
    handleChange(e) {
         this.setState({
            ...this.state,
            text : e.target.value
        })
    }
    handleTranslate(){
        if(!this.state.text.length > 0 ) {
            return
        }
        let selection = {
            language : this.state.language || 'es',
            text : this.state.text
        }
        //here we dispatch fetch text !
        this.props.dispatch(fetchTranslation(selection))
    }
}


export default connect()(TranslateField);