import React from 'react';
import Index from '../../modules/Home/components/Article/index.js';
import Post from './Post.js';
import '../../stylesheets/Home/article.css';

const articles = (props) => {
    //making posts component list
    const posts = [];
    console.log()
    for(let i in props.posts){
        posts.push(<li key={i}><Post post={props.posts[i]} index={props.posts.length - i}/></li>)
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