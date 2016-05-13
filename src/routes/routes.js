import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

import App from '../containers/App';
import HomePage from '../containers/HomePage.js';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={App} />
        <Route path="/home" component={HomePage} />
      </Route>
    </Router>
  );
};

