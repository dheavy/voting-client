import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router'
import Voting from './components/Voting';
import App from './components/App';

ReactDOM.render(
  <Router>
    <Route history={browserHistory} component={App}>
      <Route path="/" component={Voting} />
    </Route>
  </Router>,
  document.getElementById('app')
);
