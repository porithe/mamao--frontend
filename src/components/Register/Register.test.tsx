import React from 'react';
import { render } from '@testing-library/react';
import Register from './Register';

test('should render register component correctly', () => {
  const { getByTestId, getByText } = render(<Register />);

  expect(getByTestId('username-inp')).toBeTruthy();
  expect(getByTestId('email-inp')).toBeTruthy();
  expect(getByTestId('password-inp')).toBeTruthy();
  expect(getByTestId('repeatedPassword-inp')).toBeTruthy();
  expect(getByText('Sing up')).toBeTruthy();
});
