import React, { Component } from 'react';
import Top from '../components/top/top.js';
import Header from '../components/header/header.js';
import Article from '../containers/Article/Article.js';

export default class HomeContainers extends Component {
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