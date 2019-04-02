import React from 'react';
import { Component } from 'react';
import Index from '../../components/Article/index.js';
import Articles from '../../components/Article/Post.js';
import '../../../../stylesheets/Home/article.css';

const articles = (props) => (
    <div id='article'>
        <Index />
        <Articles />
    </div>
)

export default articles;