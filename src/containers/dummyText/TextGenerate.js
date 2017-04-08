import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Selection } from '../../components/dummyText/Selection'
import { fetchText } from '../../actions/textActions'



class TextGenerate extends Component {
    constructor(props){
        super(props);
        this.handleSelect = this.handleSelect.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleGenerate = this.handleGenerate.bind(this)
        this.state = { format : '', elements : '' }
    }
    render(){
        return(
            <Selection 
                onSelect={this.handleSelect}
                onChange={this.handleChange}
                onGenerate={this.handleGenerate}
                />
        )
    }
    handleSelect(e) {
        this.setState({
            ...this.state,
            format : e.target.value
        })
    }
    handleChange(e) {
         this.setState({
            ...this.state,
            elements : e.target.value
        })
    }
    handleGenerate(){
        if(!this.state.elements.length > 0 ) {
            return
        }
        let selection = {
            format : this.state.format || 'p',
            elements : this.state.elements
        }
        //here we dispatch fetch text !
        this.props.dispatch(fetchText(selection))
    }
}


export default connect()(TextGenerate);