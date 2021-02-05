import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from './constants/colors';
import UnauthenticatedApp from './views/UnauthenticatedApp/UnauthenticatedApp';
import Header from './components/Header/Header';
import { useAuthState } from './context/authContext';
import AuthenticatedApp from './views/AuthenticatedApp/AuthenticatedApp';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${COLORS.WHITE};
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const { isUserAuthenticated } = useAuthState();
  return (
    <Router>
      <AppWrapper>
        <Header />
        {isUserAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </AppWrapper>
    </Router>
  );
};

export default App;
