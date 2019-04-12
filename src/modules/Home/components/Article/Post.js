import React from 'react';

const posts = (props) => {
    const post_url = '/post/' + props.index;

    //投稿内容の切り出し
    const post_content = props.post.content.slice(0, 50) + '...';
    return (
        <div id='posts'>
            <div className='post'>
                <a href={post_url} className='postLink'>
                    <h2 className='postTitle'>{props.post.title}</h2>
                    <p className='postDate'>{props.post.date}</p>
                    <p className='postContent'>{post_content}</p>
                </a>
            </div>
        </div>
    )
}

export default posts