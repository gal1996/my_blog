import React, { Component } from 'react';
import getPostsAction from '../../../vender/actions/articleActions.js';
import Articles from '../../../templates/Articles/Article.js'

export default class HomeContainers extends Component {
  constructor(props) {
    super(props);
    this.posts = [];
  }

  componentDidMount(){
    this.props.props.dispatch(getPostsAction());
  }

  render() {
    return (
      <div id="createAll">
        <Articles posts={this.props.props.articleReducer.posts}/>
      </div>
    )
  }
}