import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from '../components/home';
import ShapeGenerator from '../components/shape_generator';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/shape-generator" component={ShapeGenerator} />
    <Redirect path="/" to="/shape-generator" />
  </Switch>
);

export default routes;
