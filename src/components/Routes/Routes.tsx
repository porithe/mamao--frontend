import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import SocialTable from '../../views/SocialTable/SocialTable';
import Profile from '../../views/Profile/Profile';
import ProfileSettings from '../../views/ProfileSettings/ProfileSettings';

const Routes = () => (
  <Switch>
    <Route exact path={ROUTES.SOCIAL_TABLE}>
      <SocialTable />
    </Route>
    <Route path={ROUTES.PROFILE}>
      <Profile />
    </Route>
    <Route path={ROUTES.PROFILE_SETTINGS}>
      <ProfileSettings />
    </Route>
  </Switch>
);

export default Routes;
