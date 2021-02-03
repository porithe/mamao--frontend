import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import COLORS from '../../constants/colors';

const setViewMock = () => {};

test('should render login component correctly', () => {
  const { getByTestId, getByText } = render(<Login setView={setViewMock} />);

  expect(getByText('Welcome back!')).toBeTruthy();
  expect(getByTestId('username-inp')).toBeTruthy();
  expect(getByTestId('password-inp')).toBeTruthy();
  expect(getByText('Log in')).toBeTruthy();
  expect(getByText("Don't have an account?")).toBeTruthy();
  expect(getByText('Sing up')).toBeTruthy();
});

test('should change border color to red when length validation error', async () => {
  const { getByTestId, getByText } = render(<Login setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Log in');
  userEvent.type(usernameInp, 'qw');
  userEvent.type(passwordInp, 'qw');
  userEvent.click(submitBtn);
  await waitFor(() => expect(usernameInp).toHaveStyle(`border-color: ${COLORS.RED}`));
  await waitFor(() => expect(passwordInp).toHaveStyle(`border-color: ${COLORS.RED}`));
});

test('should change border color to red when required validation error', async () => {
  const { getByTestId, getByText } = render(<Login setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Log in');
  userEvent.type(usernameInp, '');
  userEvent.type(passwordInp, '');
  userEvent.click(submitBtn);
  await waitFor(() => expect(usernameInp).toHaveStyle(`border-color: ${COLORS.RED}`));
  await waitFor(() => expect(passwordInp).toHaveStyle(`border-color: ${COLORS.RED}`));
});

test('should has purple border color when no validation errors', async () => {
  const { getByTestId, getByText } = render(<Login setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Log in');
  userEvent.type(usernameInp, 'qwertyu');
  userEvent.type(passwordInp, 'qwerqwer');
  userEvent.click(submitBtn);
  await waitFor(() => expect(usernameInp).toHaveStyle(`border-color: ${COLORS.PURPLE}`));
  await waitFor(() => expect(passwordInp).toHaveStyle(`border-color: ${COLORS.PURPLE}`));
});
