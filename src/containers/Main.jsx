import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './main/Home';
import Login from './main/Login';
import Signup from './main/Signup';
import NewsLatest from './main/NewsLatest';
import Contact from './main/Contact';

class Main extends Component {

    render() {
        return (
            <div className="main">
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/newslatest" component={NewsLatest} />
                <Route exact path="/contact" component={Contact} />
            </div>
        );
    }
}

export default Main;
