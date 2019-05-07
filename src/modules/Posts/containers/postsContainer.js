import React, { Component } from 'react';
import getPostsAction from '../../../vender/actions/articleActions.js';
import Articles from '../../../templates/Articles/Article.js'
import Header from '../../../templates/header/header.js';

export default class HomeContainers extends Component {
  componentDidMount(){
    this.props.dispatcher.dispatch(getPostsAction());
  }

  render() {
      return (
        <div id="createAll">
          <Header />
          <Articles posts={this.props.dispatcher.articleReducer.posts}/>
        </div>
      )
  }
}