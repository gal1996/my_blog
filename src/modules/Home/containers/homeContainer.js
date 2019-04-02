import React, { Component } from 'react';
import Top from '../components/top/top.js';
import Header from '../../../templates/header/header.js';
import Article from '../containers/Article/Article.js';
import { connect } from 'react-redux';

@connect()
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