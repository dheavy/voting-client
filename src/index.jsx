import {Router, Route, browserHistory} from 'react-router'
import {ResultsContainer} from './components/Results';
import {VotingContainer} from './components/Voting';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import io from 'socket.io-client';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import React from 'react';

const finalCreateStore = compose(
  typeof window === 'object'
  && typeof window.devToolsExtension !== 'undefined' ?
  window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => store.dispatch({type: 'SET_STATE', state}));

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
