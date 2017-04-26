import React from 'react';
import {Link} from 'react-router-dom'

const style = {
    img : {
        height: "220px",
        width: "220px",
        borderRadius : '45%'
    },
    repos : {
        font: '28px'
    },
    profile : {
        display: 'flex',
        flexDirection: 'column'
        
    }
}

export const UserProfile = ({user, onRepoClick}) => (
    <div style={style.profile}>
        <img src={user.avatar_url} alt='avatar' style={style.img}/>
        <p> <strong> Username  </strong> :  {user.name}  </p>
        <p> <strong> Bio </strong> : {user.bio} </p>
        <p> <strong> Email : </strong> : {user.email} </p>
        <p>  <strong> location : </strong> : {user.location} </p>
        <p style={style.repos}> {user.public_repos} <Link to={`/github/${user.login}`} > Show Repos </Link> </p>
    </div>
)