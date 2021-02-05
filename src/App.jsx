import React, {Component} from 'react';


// Router
import {HashRouter as Router, Route, Switch} from "react-router-dom";

// CSS
import './css/App.css';
import './css/Projects.css';
import './css/Mobile.css';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import ScrollApp from './pages/ScrollApp';

// Projects
import Shopify from './pages/Projects/Shopify';
import Sporttrade from './pages/Projects/Sporttrade';
import Flux from './pages/Projects/Flux';
import SwiftUI from './pages/Projects/SwiftUI';
import Cercacor1 from './pages/Projects/Cercacor1';
import WebDesign from './pages/Projects/WebDesign';
import Chatadoc from './pages/Projects/Chatadoc';
import MiscDesign from './pages/Projects/MiscDesign';

// App
class App extends Component {
    render() {
        return (
            <Router>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/contact" component={Contact}/>
                            <Route exact path="/cercacor1" component={Cercacor1} />
                            <Route exact path="/sporttrade" component={Sporttrade}/>
                            <Route exact path="/flux" component={Flux}/>
                            <Route exact path="/shopify" component={Shopify}/>
                            <Route exact path="/webdesign" component={WebDesign}/>
                            <Route exact path="/swiftui" component={SwiftUI}/>
                            <Route exact path="/chatadoc" component={Chatadoc}/>
                            <Route exact path="/miscdesign" component={MiscDesign}/>
                            <Route
                                render={() => (
                                <div>
                                    <h3>404</h3>
                                </div>
                            )}/>
                        </Switch>
                    </div>
            </Router>
        );
    }
}

export default App;
