import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UnauthenticatedRouter from '../../router/UnauthenticatedRouter';

const UnauthenticatedApp = () => (
  <Router>
    <UnauthenticatedRouter />
  </Router>
);

export default UnauthenticatedApp;
