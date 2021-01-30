import React from 'react';
import styled from 'styled-components';
import COLORS from './constants/colors';
import UnauthenticatedApp from './views/UnauthenticatedApp/UnauthenticatedApp';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${COLORS.WHITE};
`;

const App = () => (
  <AppWrapper>
    <UnauthenticatedApp />
  </AppWrapper>
);

export default App;
