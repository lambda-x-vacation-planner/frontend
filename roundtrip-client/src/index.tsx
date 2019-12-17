import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    return state
  }
  default:
    return state;
};
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<App />, document.getElementById('root'));
