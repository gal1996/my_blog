import React, { Component } from 'react';
import Top from '../components/top/top.js';
import Header from '../../../templates/header/header.js';
import Article from '../containers/Article/Article.js';
import * as articleActions from '../actions/articleActions';

export default class HomeContainers extends Component {
  componentDidMount(){
    articleActions.setPosts();
    console.log(this.state);
    console.log(this.props);
  }
  render() {
    return (
      <div id="home">
        <Header />
        <Top />
        <Article />
      </div>
    )
  }
}