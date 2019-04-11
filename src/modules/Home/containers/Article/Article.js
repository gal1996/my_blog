import React from 'react';
import Index from '../../components/Article/index.js';
import Post from '../../components/Article/Post.js';
import '../../../../stylesheets/Home/article.css';

const articles = (props) => {
    //making posts component list
    const posts = [];
    for(let i in props.posts){
        posts.push(<li key={i}><Post post={props.posts[i]}/></li>)
    }

    return(
        <div id='article'>
            <Index />
            <ul>
                {posts}
            </ul>
        </div>
    )
}

export default articles;