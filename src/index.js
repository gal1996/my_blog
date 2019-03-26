import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './javascript/serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';
import Home from '../src/materials/Home/HomeContainer.js';
import Posts from '../src/materials/Posts/PostsContainer.js';
import Create from '../src/materials/Create/CreateConteiner.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/index" component={Home} />
          <Route path="/posts/:id" component={Posts} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
