import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

test('should render login component correctly', () => {
  const { getByTestId, getByText } = render(<Login />);

  expect(getByTestId('username-inp')).toBeTruthy();
  expect(getByTestId('password-inp')).toBeTruthy();
  expect(getByText('Log in')).toBeTruthy();
});
