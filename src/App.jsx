import React, {Component} from 'react';

// Router
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createHashHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

// CSS
import './css/App.css';
import './css/Projects.css';
import './css/Mobile.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';


// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Projects
import SwiftUI from './pages/Projects/SwiftUI';
import Cercacor1 from './pages/Projects/Cercacor1';
import Sporttrade from './pages/Projects/Sporttrade';
import Cercacor2 from './pages/Projects/Cercacor2';
import Flux from './pages/Projects/Flux';


// Router
export const history = createHashHistory({
    hashType: 'slash',
    getUserConfirmation: (message, callback) => callback(window.confirm(message))
});

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
      ),
    ),
  )

  return store
}


// App
class App extends Component {
    render() {
        return (
            <Router>
                    <Route exact path="/" component={Home}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contact" component={Contact}/>

                    <Route exact path="/projects/swiftui" component={SwiftUI}/>
                    <Route exact path="/projects/cercacor1" component={Cercacor1}/>
                    <Route path="/sporttrade" component={Sporttrade}/>
                    <Route exact path="/projects/cercacor2" component={Cercacor2}/>
                    <Route exact path="/projects/flux" component={Flux}/>

            </Router>
        );
    }
}

export default App;
