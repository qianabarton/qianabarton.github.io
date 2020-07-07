import React from 'react';
import ReactDOM from 'react-dom';

// Router
import { Provider } from 'react-redux'
import configureStore, { history } from './configureStore'
import { ConnectedRouter } from 'connected-react-router'

import App from './App';
import Nav from './components/Nav'
import Footer from './components/Footer'

import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore()

ReactDOM.render( < Nav / > , document.getElementById('nav'));

ReactDOM.render( < App / > , document.getElementById('root'));

ReactDOM.render( < Footer / > , document.getElementById('footer'));