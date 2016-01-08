import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import Voting from './components/Voting';
import App from './components/App';
import Results from './components/Results';

ReactDOM.render(
  <Router>
    <Route history={browserHistory} component={App}>
      <Route path="/results" component={Results} />
      <Route path="/" component={Voting} />
    </Route>
  </Router>,
  document.getElementById('app')
);
