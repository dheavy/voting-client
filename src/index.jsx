import {Router, Route, browserHistory} from 'react-router'
import Results from './components/Results';
import Voting from './components/Voting';
import App from './components/App';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import React from 'react';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
})

ReactDOM.render(
  <Router>
    <Route history={browserHistory} component={App}>
      <Route path="/results" component={Results} />
      <Route path="/" component={Voting} />
    </Route>
  </Router>,
  document.getElementById('app')
);
