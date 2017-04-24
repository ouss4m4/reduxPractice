import React from 'react';

const style = {
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

export const UserRepos = ({reposit}) => (
    <div style={style.grid}>
         {reposit.map(repo => <div style={style.single} key={repo.id}>
         <p> <strong> Name : </strong> {repo.name}  </p>
         <p><strong> Created : </strong> {repo.created_at} </p>
         <p><strong> Description : </strong> {repo.description} </p>
         <p><a href={repo.url}> Vien On Github </a> </p>
         </div>)} 
    </div>
    )


