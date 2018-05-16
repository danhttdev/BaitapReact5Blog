import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from './main/Home';
import Login from './main/Login';
import Signup from './main/Signup';
import NewsLatest from './main/NewsLatest';
import Contact from './main/Contact';
import FullNews from './main/FullNews';
import Edit from './main/Edit';
import UpdateAccont from './main/UpdateAccont';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/newslatest" component={NewsLatest} />
                <Route path="/contact" component={Contact} />
                <Route path="/fullnews" component={FullNews} />
                <Route path="/edit" component={Edit} />
                <Route exact path="/updateaccount" component={UpdateAccont} />
            </div>
        );
    }
}

export default Main;
