import React , { Component } from 'react';
import * as bizLogic from '../../../models/Home/bizLogic.js';

export default class Post extends Component {
    constructor(props){
        super(props);
        this.postsQusry = bizLogic.fetchPosts();
    }

    render() {
        return (
            null
        )
    }
}