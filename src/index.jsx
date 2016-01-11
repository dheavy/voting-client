import {Router, Route, browserHistory} from 'react-router'
import Results from './components/Results';
import Voting from './components/Voting';
import {Provider} from 'react-redux';
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
  <Provider store={store}>
    <Router>
      <Route history={browserHistory} component={App}>
        <Route path="/results" component={Results} />
        <Route path="/" component={Voting} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
