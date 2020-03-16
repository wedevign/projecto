import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import Home from './components/home/';
import Login from './components/login/';

import './app.scss';

import { createBrowserHistory as createHistory } from "history";


const history = createHistory();



class App extends Component {

  render() {
    return(
      <Router>
        <Route path="/login" component={Home} />
        <Route path="/" component={Login} />
      </Router>
      // <Router>
      //   <Route path="/login" >
      //     <Home />
      //   </Route>
      //   <Route path="/">
      //     <Login />
      //   </Route>
      // </Router>
    );
  }
}

export default App;
