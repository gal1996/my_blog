import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../css/App.css';

class App extends Component {
  render() {
    console.log('hoge')
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React fuck
          </a>
        </header>
      </div>
    );
  }
}

export default App;