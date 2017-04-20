import React from 'react';
import SelectSources from './SelectSources'
import ShowSources from'./ShowSources'
import './style.css'

export const NewsApp = () => (
        <div className='container'>
            <SelectSources />    
            <ShowSources />
        </div>
)

