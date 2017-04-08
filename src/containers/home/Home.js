import React from 'react';
import { Link } from 'react-router-dom'
export const Home = () => {
    return (
    <div className="container">
            <div className="jumbotron text-center">
                <h1> Welcome Home </h1>
                <p> You Are Awesome </p>
            </div>
            <div className="row">
                <div className="col-md-4">
                  <Link to='/text'> <h2> Random Text Api </h2></Link>
                    <p> Welcome to RandomText RandomText is a tool designers and developers can use to quickly grab dummy text in either Lorem Ipsum or Gibberish format.There are a number of features that make RandomText a little different from other Lorem Ipsum dummy text generators you may find around the web.... </p> 
                </div>
                <div className="col-md-4">
                    <Link to='/translate'><h2> Translate API </h2></Link>
                    <p>The API provides access to the Yandex online machine translation service. It supports more than 70 languages and can translate separate words or complete texts. The API makes it possible to embed Yandex.Translate in a mobile app or web service for end users. Or translate large quantities of text, such as technical documentation.</p>
                </div>
                <div className="col-md-4">
                    <h2> React </h2>
                    <p> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug.</p>
                </div>
            </div>
    </div>
    )
}
