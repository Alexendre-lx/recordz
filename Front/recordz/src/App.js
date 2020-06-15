import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './App.css';
import Nav from './frontPage/nav'
import Home from './frontPage/frontpage'
import Landing from './landingPage/landing'
import Page from './mainpage'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
              <div>
              <Nav/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/landing" component={Landing} />
                    <Route path="/page" component={Page} />
                </Switch>
              </div>
            </Router>
    </div>
  );
}

export default App;
