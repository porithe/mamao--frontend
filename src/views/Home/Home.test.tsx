import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

test('should render correct text in home view', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Join mamao today!')).toBeTruthy();
  expect(getByText('See what’s happen’ in the world right now!')).toBeTruthy();
});

test('should render two auth links when view is default', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Sing up')).toBeTruthy();
  expect(getByText('Log in')).toBeTruthy();
});

test('should render register component when clicked on sing up button', () => {
  const { getByTestId, getByText } = render(<Home />);
  const singupBtn = getByText('Sing up');
  userEvent.click(singupBtn);
  expect(getByTestId('email-inp'));
  expect(getByTestId('repeatedPassword-inp'));
});

test('should render login component when clicked on log in button', () => {
  const { getByTestId, getByText } = render(<Home />);
  const loginBtn = getByText('Log in');
  userEvent.click(loginBtn);
  expect(getByTestId('username-inp'));
  expect(getByTestId('password-inp'));
});
