import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from '../src/materials/Home'
import * as serviceWorker from './javascript/serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';
//import PostsIndex from './components/posts_index';
//import PostsNew from './components/posts_new';
//import PostsShow from './components/posts_show';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
