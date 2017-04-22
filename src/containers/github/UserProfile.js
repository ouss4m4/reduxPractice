import React from 'react';

export const UserProfile = ({user}) => (
    <div>
        <label htmlFor='username'> Username : </label>  {user.name} <br />

    </div>
)