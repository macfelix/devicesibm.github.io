import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Content from './Content';
import IairMain from './iair/iair-main';
import registerServiceWorker from './registerServiceWorker';

/* ReactDOM.render(<App />, document.getElementById('root')); */
ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Content/>, document.getElementById('content'));
//ReactDOM.render(<IairMain/>, document.getElementById('content'));
registerServiceWorker();
