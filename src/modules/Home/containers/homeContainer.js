import React, { Component } from 'react';
import Top from '../components/top/top.js';
import Header from '../../../templates/header/header.js';
import Article from '../../../templates/Articles/Article';
import getPostsAction from '../../../vender/actions/articleActions';

export default class HomeContainers extends Component {
  constructor(props) {
    super(props);
    this.props.dispatcher.dispatch(getPostsAction());
  }

  render() {
    return (
      <div id="home">
        <Header />
        <Top />
        <Article posts={this.props.dispatcher.articleReducer.posts}/>
      </div>
    )
  }
}