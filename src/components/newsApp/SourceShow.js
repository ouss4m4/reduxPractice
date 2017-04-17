import React from 'react';
import {Link} from 'react-router-dom'

export const SourceShow = ({ sources, getArticles }) => {
    return (
    <div className="source-grid">
        {sources.map( s =>
         <div className="source-single" key={s.id}>
             <h3> {s.name} </h3>
             <Link to={`/news/${s.id}`} > Show Articles </Link>
             <p> {s.description} </p>
             <a href={s.url} target="_blank" rel="noopener"> Officiel Website </a>
         </div>)}
    </div>
    )   
}

