import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './containers/home.js';
import Login from './containers/login.js';
import Join from './containers/join.js';
import Dashboard from './containers/dashboard.js';

class App extends Component {
    render() {
      return (
        <React.Fragment>
         
          <Router>
          <hr />
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/join" component={Join}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
              </Switch>
          </Router>
        </React.Fragment>
         
      );

    }


}




export default App;
