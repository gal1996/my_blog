import React, { Component } from 'react';
import Top from '../components/top/top.js';
import Header from '../../../templates/header/header.js';
import Article from '../containers/Article/Article.js';
import getPostsAction from '../actions/articleActions';

export default class HomeContainers extends Component {
  async componentDidMount(){
    await this.props.props.dispatch(getPostsAction());
  }
  render() {
    return (
      <div id="home">
        <Header />
        <Top />
        <Article posts={this.props.props.articleReducer.posts}/>
      </div>
    )
  }
}