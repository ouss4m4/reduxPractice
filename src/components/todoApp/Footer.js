import React from 'react';
import { Link } from 'react-router-dom'


export const Footer = () => (
    <div>
         <Link to='/todos/all'> Show all </Link>  ||  
         <Link to='/todos/active'> Active </Link>  || 
         <Link to='/todos/completed'> Completed </Link> 
    </div>

)