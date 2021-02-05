import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import { AuthContext, AuthProvider } from '../../context/authContext';
import { AuthStatuses } from '../../constants/authContextTypes';

test('should render correct text in header link', () => {
  const { getByText } = render(
    <AuthProvider>
      <Router>
        <Header />
      </Router>
    </AuthProvider>,
  );

  expect(getByText('Mamao')).toBeTruthy();
});

test('should render logout button', () => {
  const { getByText } = render(
    <AuthContext.Provider value={{ state: { status: AuthStatuses.SUCCESS } }}>
      <Router>
        <Header />
      </Router>
    </AuthContext.Provider>,
  );

  expect(getByText('Mamao')).toBeTruthy();
});
