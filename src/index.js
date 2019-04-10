import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import * as serviceWorker from './javascript/serviceWorker';
import App from '../src/modules/App/App.js';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import reducer from './vender/reducers/index.js';
import { Provider } from 'react-redux';
import initFirebase from './models/index';

//firebaseとの接続
initFirebase()

//middlewareの設定
const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


