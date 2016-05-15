import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers/App.js';
import HomeContainer from '../containers/HomeContainer.js';
import AboutContainer from '../containers/AboutContainer.js';
import ContactContainer from '../containers/ContactContainer.js';
import ShopContainer from '../containers/ShopContainer.js';
import CartContainer from '../containers/CartContainer.js';

import { browserHistory } from 'react-router';


export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer}/>
        <Route path="/about" component={AboutContainer}/>
        <Route path="/contact" component={ContactContainer}/>
        <Route path="/shop" component={ShopContainer}/>
        <Route path="/cart" component={CartContainer}/>
      </Route>
    </Router>
  );
};
