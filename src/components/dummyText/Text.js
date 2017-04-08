import React from 'react';

export const Text = ({ text }) => {
    return (<div>
    <h3> {text ? "generated text"  : '' } </h3>
    <div className="genText">
       {text}
    </div>
   </div> )
}