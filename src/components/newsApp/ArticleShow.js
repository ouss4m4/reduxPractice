import React from 'react';

export const ArticleShow = ({articles}) => (
    <div className='articles-grid'>{articles.map((a) =>
         <div className='articles-single' key={a.url}>
          <p> <strong> Author </strong> : {a.author} </p> 
           <p> <strong> Title </strong> :  {a.title} </p>
          <p>   {a.description}    </p> 
          <img src={a.urlToImage} alt="" className='image'/>
          <a href={a.url}> Read </a>
        </div>)}
    </div>

)
