import React, { Component } from 'react';
import Top from '../components/top.js'
//import Profile from '../components/Profile.js'
//import Article from '../components/Article.js'

export default class HomeContainers extends Component {
  render() {
    return (
      <div id="home">
        {/*<Header />
        */}
        <Top />
        {/*<Profile />
          <Article />
        */}
      </div>
    )
  }
}