import React from 'react';
import {Link} from 'react-router-dom'
const style = {
    container : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    },
    grid : {
        display : "flex",
        flexFlow : "row wrap",
        justifyContent : 'space-around'
    },
    single: {
        margin : "10px",
        width : "45%",
        display : "flex",
        flexFlow: 'column wrap',
        background : 'lightgrey'
    }
}

export const UserRepos = ({reposit}) => (<div style={style.container}>
    <Link to='/github'> &lt;- back </Link>
    <div style={style.grid}>
         {reposit.map(repo => <div style={style.single} key={repo.id}>
         <p> <strong>  name  </strong> : {repo.name} <i className="fa fa-star" aria-hidden="true"></i>  {repo.stargazers_count} </p>
         <p><strong> Created : </strong> {repo.created_at} </p>
         <p><strong> Description : </strong> {repo.description} </p>
         <p><a href={repo.html_url}> Go To Github </a> </p>
         </div>)} 
    </div>
    </div>)


