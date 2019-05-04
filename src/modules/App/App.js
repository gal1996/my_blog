import React from 'react';
import { Component } from 'react';
import '../../stylesheets/index.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/containers/homeContainer.js';
import Articles from '../Posts/containers/postsContainer.js';
import Post from '../Posts/containers/post.js'
//import Create from '../src/modules/Create/containers/createContainer.js';
//import Profile from '../src//modules/Profile/containers/ProfileContainer.js';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Switch>
                <Route path="/home" render={ () => <Home props={this.props} /> } />
                <Route path='/articles' render={ () => <Articles props={this.props} /> } />
                <Route path="/post/:id" render={ () => <Post props={this.props} /> } />
                {/*
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
    return state;
}
export default connect(mapStateToProps)(App)