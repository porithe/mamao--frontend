import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home/Home';
import Register from '../views/Register/Register';
import { UNAUTHENTICATED_ROUTES } from './routes';

const UnauthenticatedRouter = () => (
  <Switch>
    <Route exact path={UNAUTHENTICATED_ROUTES.HOME}>
      <Home />
    </Route>
    <Route path={UNAUTHENTICATED_ROUTES.REGISTER}>
      <Register />
    </Route>
  </Switch>
);

export default UnauthenticatedRouter;
