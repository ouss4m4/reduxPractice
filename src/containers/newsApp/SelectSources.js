import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Picker } from '../../components/newsApp/Picker'
import { fetchSources } from '../../actions/newsActions'

class SelectSources extends Component{
    constructor(props){
        super(props);
        this.state = {
            lang : 'en',
            category : 'general'
        }
    }

    handleLangChange = (e) => { this.setState({...this.state, lang : e.target.value})}
    handleCategoryChange = (e) => { this.setState({...this.state, category : e.target.value})}
    handleValidate = () => {
        const { dispatch } = this.props;
        const selection = { lang : this.state.lang, category : this.state.category}
        dispatch(fetchSources(selection))}
    
    render(){
        return (<div>
            <Picker 
                onLangChange={this.handleLangChange}
                onCategoryChange={this.handleCategoryChange}
                onValidate={this.handleValidate}
            />            
        </div>)
    }
}

export default connect()(SelectSources);