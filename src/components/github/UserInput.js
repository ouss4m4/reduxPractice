import React from 'react';

export const UserInput = ({onSubmit,onChange}) => (
    <form onSubmit={onSubmit}>
        <input type='text' onChange={onChange} />
        <input type='submit' value='search' />
    </form>
)