import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { SourceShow } from '../../components/newsApp/SourceShow'
import { fetchArticles } from '../../actions/newsActions'

class ShowSources extends Component{
    render(){
        const { Channels, getArticles } = this.props
        const renderChannels = () => {
            if (Channels.isFetching){
                return <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
            }
            if (Channels.fetched) {
                if (Channels.data.status ==='ok') {
                    return ( <SourceShow getArticles={getArticles} sources={Channels.data.sources}/> )
                } else if (Channels.data.status ==='error') {return <p> {Channels.data.message} </p>}
                }
                return <p> please select params to get sources </p>
        }
        return(<div>
            {renderChannels()}
        </div>)
    }
}

const mapStateToProps = (state) => ({
    Channels : state.news.Channels
})

const mapDispatchToProps = (dispatch) => ({
    getArticles : bindActionCreators(fetchArticles, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ShowSources)