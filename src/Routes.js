import React from 'react';
import { Switch, Route } from 'react-router';
import Home from './Home';
import Perfil from './Perfil';
import NotFound from './NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/perfil" component={Perfil}/>
    <Route component={NotFound}/>
  </Switch>
);

export default Routes;