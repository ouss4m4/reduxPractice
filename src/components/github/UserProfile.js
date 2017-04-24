import React from 'react';
import {Link} from 'react-router-dom'
export const UserProfile = ({user, onRepoClick}) => (
    <div>
        <label htmlFor='username'> Username : </label>  {user.name} <br />
        <Link to={`/github/${user.login}`} > Show Repos </Link>
    </div>
)