import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Routes from '../../components/Routes/Routes';
import Search from '../../components/Search/Search';

const queryClient = new QueryClient();

const StyledAuthenticatedApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 5rem;
`;

const AuthenticatedApp = () => (
  <Router>
    <StyledAuthenticatedApp>
      <ToastContainer />
      <Header />
      <QueryClientProvider client={queryClient}>
        <Search />
        <Routes />
      </QueryClientProvider>
    </StyledAuthenticatedApp>
  </Router>
);

export default AuthenticatedApp;
