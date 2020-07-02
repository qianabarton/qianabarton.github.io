import React, {Component} from 'react';

// CSS
import './css/App.css';
import './css/Projects.css';
import './css/Mobile.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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

// Resume

class App extends Component {
    render() {
        console.log("This is the process.env = ", process.env.PUBLIC_URL)

        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/contact" component={Contact}/>

                    <Route exact path="/projects/swiftui" component={SwiftUI}/>
                    <Route exact path="/projects/cercacor1" component={Cercacor1}/>
                    <Route exact path="/projects/sporttrade" component={Sporttrade}/>
                    <Route exact path="/projects/cercacor2" component={Cercacor2}/>
                    <Route exact path="/projects/flux" component={Flux}/>

                </Switch>
            </Router>
        );
    }
}

export default App;
