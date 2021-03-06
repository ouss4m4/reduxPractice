import React, {Component} from 'react'
import {UserInput} from '../../components/github/UserInput'
import {UserProfile} from '../../components/github/UserProfile'
import {connect} from 'react-redux'
import {fetchUser} from '../../actions/githubActions'

class GithubMain extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(fetchUser(this.state.username))
    }
    handleChange = (e) => {
        this.setState({
            username : e.target.value
        })
    }
    render(){
        const {isFetching,fetched,user} = this.props.user
        return(
             <div className='container'>
               <UserInput onSubmit={this.handleSubmit} onChange={this.handleChange}/>
               {isFetching ? <i className="fa fa-spinner fa-spin" aria-hidden="true"></i> : !fetched ? 'enter a user to look for ' : user.message ? 'user not found bro' :
                <UserProfile user={user} onRepoClick={()=> this.props.dispatch()}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.Github.User
})

export default connect(mapStateToProps)(GithubMain);
