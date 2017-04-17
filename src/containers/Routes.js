import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import DummyText from './dummyText/DummyText'
import Translate from './translate/Translate'
import { Home } from './home/Home'
import TodoApp from './todoApp/TodoApp'
import {NewsApp} from './newsApp/Layout.js'
import ShowArticles from './newsApp/ShowArticles'

export const Routes = () => (
    <Router >
        <div>
            <div className='navbar navbar-default'>
                <div className='container'>
                    <div className='navbar-header'>
                        <Link className='navbar-brand' to="/"> REACT &hearts; </Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li> <Link  to="/"> Home </Link> </li>
                        <li> <Link  to="/text"> Random Text </Link> </li>
                        <li> <Link  to="/translate"> Translator </Link> </li>
                        <li> <Link  to="/todos/all"> Todos </Link> </li>
                        <li> <Link  to="/news" > News </Link> </li>
                    </ul>
                </div>
            </div>
            <Switch> 
                <Route path="/" exact component={Home}/>
                <Route path="/text"  component={DummyText} />
                <Route path="/translate" component={Translate} />
                <Route path="/todos/:filter" component={TodoApp} />
                <Route path="/news" exact component={NewsApp} />
                <Route path="/news/:channel" component={ShowArticles} />
                <Route render={ ({ location }) => (<h3>No match for <code>{location.pathname}</code></h3>) } />
            </Switch>
        </div>
    </Router>
)

