import React, { Component } from 'react';
import getPostsAction from '../../../vender/actions/articleActions';
import postHead from '../components/postHead.js'
import postBody from '../components/postBody.js'


export default class Post extends Component {
    constructor(props){
        super(props);
        this.postId = this.props.match.params.id - 1;
        this.post = {date: '', content: '', title: ''};
    }

    async componentDidMount(){
        await this.props.dispatcher.dispatch(getPostsAction());
        this.post = this.setPostContent();
        console.log(this.post.date)
    }

    setPostContent = () => {
        const post = {
            date: this.props.dispatcher.articleReducer.posts[this.postId].date,
            content: this.props.dispatcher.articleReducer.posts[this.postId].content,
            title: this.props.dispatcher.articleReducer.posts[this.postId].title,
        };

        return post
    }

    render() {
        console.log(this.post);
        return (
            <div id="postAll">
                <postHead date={this.post.date} title={this.post.title}/>
                <postBody content={this.post.content}/>
            </div>
        )
    }
}