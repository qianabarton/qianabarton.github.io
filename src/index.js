import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import Nav from './components/Nav'
import Footer from './components/Footer'

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render( < Nav / > , document.getElementById('nav'));

ReactDOM.render( < App / > ,
    document.getElementById('root')
);

ReactDOM.render( < Footer / > , document.getElementById('footer'));