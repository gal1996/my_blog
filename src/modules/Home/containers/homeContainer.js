import React, { Component } from 'react';
import Top from '../components/top/top.js';
import Header from '../../../templates/header/header.js';
import Article from '../containers/Article/Article.js';
import getPosts from '../actions/articleActions';

export default class HomeContainers extends Component {
  componentDidMount(){
    console.log('hogehoge')
    this.props.posts.dispatch(getPosts());
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