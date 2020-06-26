import * as serviceWorker from './common/serviceWorker';
import App from './App';
import configureProvider from './common/store/configureProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  configureProvider(<App />),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
