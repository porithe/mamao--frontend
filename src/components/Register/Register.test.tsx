import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Register from './Register';
import COLORS from '../../constants/colors';

const setViewMock = () => {};

test('should render register component correctly', () => {
  const { getByTestId, getByText } = render(<Register setView={setViewMock} />);

  expect(getByText('Join us!')).toBeTruthy();
  expect(getByTestId('username-inp')).toBeTruthy();
  expect(getByTestId('email-inp')).toBeTruthy();
  expect(getByTestId('password-inp')).toBeTruthy();
  expect(getByTestId('repeatedPassword-inp')).toBeTruthy();
  expect(getByText('Sing up')).toBeTruthy();
  expect(getByText('Already have an account?')).toBeTruthy();
  expect(getByText('Log in')).toBeTruthy();
});

test('should check if repeatedPassword is same as password', async () => {
  const { getByTestId, getByText } = render(<Register setView={setViewMock} />);
  const passwordInp = getByTestId('password-inp');
  const repeatedPassword = getByTestId('repeatedPassword-inp');
  const submitBtn = getByText('Sing up');
  await act(async () => {
    fireEvent.input(passwordInp, { target: { value: 'qwertyuio' } });
    fireEvent.input(repeatedPassword, { target: { value: 'xxxqwertyuio' } });
  });
  await act(async () => {
    fireEvent.click(submitBtn);
  });
  expect(repeatedPassword).toHaveStyle(`border-color: ${COLORS.RED}`);
});

test('should change border color to red when length validation error', async () => {
  const { getByTestId, getByText } = render(<Register setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const emailInp = getByTestId('email-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Sing up');
  await act(async () => {
    fireEvent.input(usernameInp, { target: { value: 'qw' } });
    fireEvent.input(emailInp, { target: { value: 'qw' } });
    fireEvent.input(passwordInp, { target: { value: 'qwe' } });
  });
  await act(async () => {
    fireEvent.click(submitBtn);
  });
  expect(usernameInp).toHaveStyle(`border-color: ${COLORS.RED}`);
  expect(emailInp).toHaveStyle(`border-color: ${COLORS.RED}`);
  expect(passwordInp).toHaveStyle(`border-color: ${COLORS.RED}`);
});

test('should change border color to red when required validation error', async () => {
  const { getByTestId, getByText } = render(<Register setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const emailInp = getByTestId('email-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Sing up');
  await act(async () => {
    fireEvent.input(usernameInp, { target: { value: '' } });
    fireEvent.input(emailInp, { target: { value: '' } });
    fireEvent.input(passwordInp, { target: { value: '' } });
  });
  await act(async () => {
    fireEvent.click(submitBtn);
  });
  expect(usernameInp).toHaveStyle(`border-color: ${COLORS.RED}`);
  expect(emailInp).toHaveStyle(`border-color: ${COLORS.RED}`);
  expect(passwordInp).toHaveStyle(`border-color: ${COLORS.RED}`);
});

test('should has purple border color when no validation errors', async () => {
  const { getByTestId, getByText } = render(<Register setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const emailInp = getByTestId('email-inp');
  const passwordInp = getByTestId('password-inp');
  const repeatedPassword = getByTestId('repeatedPassword-inp');
  const submitBtn = getByText('Sing up');
  await act(async () => {
    fireEvent.input(usernameInp, { target: { value: 'qwerty' } });
    fireEvent.input(emailInp, { target: { value: 'qwerqwer@qwer.qwer' } });
    fireEvent.input(passwordInp, { target: { value: 'qwerqwer' } });
    fireEvent.input(repeatedPassword, { target: { value: 'qwerqwer' } });
  });
  await act(async () => {
    fireEvent.click(submitBtn);
  });
  expect(usernameInp).toHaveStyle(`border-color: ${COLORS.PURPLE}`);
  expect(emailInp).toHaveStyle(`border-color: ${COLORS.PURPLE}`);
  expect(passwordInp).toHaveStyle(`border-color: ${COLORS.PURPLE}`);
  expect(repeatedPassword).toHaveStyle(`border-color: ${COLORS.PURPLE}`);
});
