import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import NotFound from './NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route component={NotFound}/>
  </Switch>
);

export default Routes;