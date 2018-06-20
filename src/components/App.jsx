import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

class App extends Component {
  render() {
    return (
    <Router>
      <Fragment>
        <Link to = "/">Go to Page 1</Link>
        <Link to = "/Page2">Go to Page 2</Link>
        <Switch>
          <Route exact path = "/" component = {Page1}/>
          <Route path = "/Page2" component = {Page2}/>
        </Switch>
      </Fragment>
    </Router>
    );
  }
}

export default App;
