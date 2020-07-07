import React, {Component} from 'react';

// Router
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// CSS
import './css/App.css';
import './css/Projects.css';
import './css/Mobile.css';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollApp from './pages/ScrollApp';



// Projects
import SwiftUI from './pages/Projects/SwiftUI';
import Cercacor1 from './pages/Projects/Cercacor1';
import Sporttrade from './pages/Projects/Sporttrade';
import Cercacor2 from './pages/Projects/Cercacor2';
import Flux from './pages/Projects/Flux';

// App
class App extends Component {
    render() {
        return (
            <Router>
            <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/sporttrade" component={Sporttrade}/>
                <Route exact path="/flux" component={Flux}/>
                <Route render={() => (<div><h3>404</h3><h3>404</h3>
                </div>)} />
            </Switch>
            </div>
  </Router>
        );
    }
}

export default App;
