import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
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
  await act(async () => {
    fireEvent.input(usernameInp, { target: { value: 'qw' } });
    fireEvent.input(passwordInp, { target: { value: 'qwe' } });
  });
  await act(async () => {
    fireEvent.click(submitBtn);
  });
  expect(usernameInp).toHaveStyle(`border-color: ${COLORS.RED}`);
  expect(passwordInp).toHaveStyle(`border-color: ${COLORS.RED}`);
});

test('should change border color to red when required validation error', async () => {
  const { getByTestId, getByText } = render(<Login setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Log in');
  await act(async () => {
    fireEvent.input(usernameInp, { target: { value: '' } });
    fireEvent.input(passwordInp, { target: { value: '' } });
  });
  await act(async () => {
    fireEvent.click(submitBtn);
  });
  expect(usernameInp).toHaveStyle(`border-color: ${COLORS.RED}`);
  expect(passwordInp).toHaveStyle(`border-color: ${COLORS.RED}`);
});

test('should has purple border color when no validation errors', async () => {
  const { getByTestId, getByText } = render(<Login setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Log in');
  await act(async () => {
    fireEvent.input(usernameInp, { target: { value: 'qwerty' } });
    fireEvent.input(passwordInp, { target: { value: 'qwerqwer' } });
  });
  await act(async () => {
    fireEvent.click(submitBtn);
  });
  expect(usernameInp).toHaveStyle(`border-color: ${COLORS.PURPLE}`);
  expect(passwordInp).toHaveStyle(`border-color: ${COLORS.PURPLE}`);
});
