import React from 'react';
import { render } from 'react-dom';
import { Routes } from './containers/Routes'
import { Provider } from 'react-redux'
import { Store } from './configureStore'




render(
    <Provider store={Store}>
        <Routes />
    </Provider>
    , document.getElementById('root')
)


    


       