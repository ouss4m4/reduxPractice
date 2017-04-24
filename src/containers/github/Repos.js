import React, {Component} from 'react'
import {connect} from 'react-redux'
import {UserRepos} from '../../components/github/UserRepos'
import {fetchRepos} from '../../actions/githubActions'

class Repos extends Component{
    componentDidMount(){
        const {user} = this.props.match.params
        this.props.dispatch(fetchRepos(user))
    }
    render(){
        const {isFetching, fetched, repos} = this.props.Repos
        return(<div>
            {isFetching ? 'loading...' : !fetched ? 'oops' : repos.message ? 'notfound ': <UserRepos  reposit={repos}/> }
        </div>)
    }
}

const mapStateToProps = (state) => ({
    Repos : state.Github.Repos
})
export default connect(mapStateToProps)(Repos);