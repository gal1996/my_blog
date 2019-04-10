import React from 'react';
import { Component } from 'react';
import '../../stylesheets/index.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/containers/homeContainer.js';

//import Posts from '../src/moduls/Posts/containers/postsContainer.js';
//import Create from '../src/modules/Create/containers/createContainer.js';
//import Profile from '../src//modules/Profile/containers/ProfileContainer.js';


class App extends Component {

    render() {
        return (
            <BrowserRouter>
            <div>
                <Switch>
                <Route path="/home" render={ () => <Home posts={this.props} /> } />
                {/*
                <Route path="/posts/:id" component={Posts} />
                <Route path="/create" component={Create} />
                <Route path="/profile" component={Profile} />
                */}
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return { state };
}
export default connect(mapStateToProps)(App)