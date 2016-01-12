import {Router, Route, browserHistory} from 'react-router'
import {ResultsContainer} from './components/Results';
import {VotingContainer} from './components/Voting';
import {Provider} from 'react-redux';
import App from './components/App';
import {createStore, compose} from 'redux';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import React from 'react';

const finalCreateStore = compose(
  typeof window === 'object'
  && typeof window.devToolsExtension !== 'undefined' ?
  window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route history={browserHistory} component={App}>
        <Route path="/results" component={ResultsContainer} />
        <Route path="/" component={VotingContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
