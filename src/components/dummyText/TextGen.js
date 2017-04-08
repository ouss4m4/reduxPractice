import React from 'react';

function createMarkup(a) {
    return { __html: a };
}

export const TextGen = ({ text }) => {
    return (<div>
        <h3> your placeholder should look like this </h3>
        <div className="output" dangerouslySetInnerHTML={createMarkup(text)} />
    </div>)
}