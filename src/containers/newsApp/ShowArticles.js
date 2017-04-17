import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchArticles} from '../../actions/newsActions'
import {ArticleShow} from '../../components/newsApp/ArticleShow'

class ShowArticles extends Component {
    componentWillMount(){
        this.props.dispatch(fetchArticles(this.props.match.params.channel))
    }
    render(){
        const {channel} = this.props.match.params;
        const {Topics} = this.props
        return(<div>
            <h1> articles from {channel} </h1>
            {!Topics.fetched ? 'loading ...' : <ArticleShow articles={Topics.data.articles} /> }
            </div>)
    }
}

const mapStateToProps = (state) => ({
    Topics : state.news.Topics
})

export default withRouter(connect(mapStateToProps)(ShowArticles))