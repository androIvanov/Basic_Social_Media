import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Content from './content';
import StatusBar from './statusBar';
import Footer from './footer';
import Login from './login';
import './style.css';
import './articleStyle.css';

function Parent() {
    return (
        <div>
            <div className="container">
            <Router>
                <StatusBar />
                    <Route exact path="/"><Content /></Route>
                    <Route exact path="/login"><Login /></Route>
                </Router>
                <Footer />

            </div>
        </div>
    );
}
export default Parent;