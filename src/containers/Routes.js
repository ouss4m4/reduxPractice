import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import DummyText from './dummyText/DummyText'
import Translate from './translate/Translate'
import { Home } from './home/Home'
import TodoApp from './todoApp/TodoApp'
import {NewsApp} from './newsApp/Layout.js'
import ShowArticles from './newsApp/ShowArticles'
import GithubMain from './github/GithubMain.js'
import Repos from './github/Repos'
import {Navigation} from './Navigation'
export const Routes = () => (
    <Router >
        <div>
            <Navigation />
            <Switch> 
                <Route path="/" exact component={Home}/>
                <Route path="/text"  component={DummyText} />
                <Route path="/translate" component={Translate} />
                <Route path="/todos/:filter" component={TodoApp} />
                <Route path="/news" exact component={NewsApp} />
                <Route path="/news/:channel" component={ShowArticles} />
                <Route path="/github" exact component={GithubMain} />
                <Route path="/github/:user" component={Repos} />
                <Route render={ ({ location }) => (<h3>No match for <code>{location.pathname}</code></h3>) } />
            </Switch>
        </div>
    </Router>
)

