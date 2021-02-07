import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import SocialTable from '../../views/SocialTable/SocialTable';
import Profile from '../../views/Profile/Profile';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTES.SOCIAL_TABLE}>
      <SocialTable />
    </Route>
    <Route path={ROUTES.PROFILE}>
      <Profile />
    </Route>
  </Switch>
);

export default Routes;
