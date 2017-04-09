import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from '../../components/dummyText/Text'
import { TextGen } from '../../components/dummyText/TextGen'

class ShowText extends Component{
     render(){
        const { isFetching, fetched} = this.props.text;
        if (isFetching) {
            return (<div className="body">
                        <Text text={'loading text'}/>
                    </div>)
        }
        if (fetched) {
            return (<div className="body">
                        <Text text={this.props.text.text}/>
                        <TextGen text={this.props.text.text}/>
                    </div>)
            } 
            return (
                <h3> select a number of elements to start </h3>
            )
       
    }
}

const mapStateToProps = (state) =>  {
    return {
    text : state.Text
    }
}


export default connect(mapStateToProps)(ShowText);