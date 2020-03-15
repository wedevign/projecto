import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/home/';
import Login from './components/login/';

import './app.scss';

import { createBrowserHistory as createHistory } from "history";


const history = createHistory();

function App() {
  return (
    // <Router history={history}>
    //   <Route path="/login" exact component={Home} />
    //   <Route path="/" exact component={Login} />
    // </Router>
    <Router>
      <Switch>
          <Route path="/" >
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
