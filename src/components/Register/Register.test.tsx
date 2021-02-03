import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import Register from './Register';
import COLORS from '../../constants/colors';
import { TOAST_MESSAGES } from '../../constants/toastify';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
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
  const repeatedPasswordInp = getByTestId('repeatedPassword-inp');
  const submitBtn = getByText('Sing up');
  userEvent.type(passwordInp, 'qwertyuio');
  userEvent.type(repeatedPasswordInp, 'qwertyuiop');
  userEvent.click(submitBtn);
  await waitFor(() => expect(repeatedPasswordInp).toHaveStyle(`border-color: ${COLORS.RED}`));
});

test('should change border color to red when length validation error', async () => {
  const { getByTestId, getByText } = render(<Register setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const emailInp = getByTestId('email-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Sing up');
  userEvent.type(usernameInp, 'qw');
  userEvent.type(emailInp, 'qw');
  userEvent.type(passwordInp, 'qw');
  userEvent.click(submitBtn);
  await waitFor(() => expect(usernameInp).toHaveStyle(`border-color: ${COLORS.RED}`));
  await waitFor(() => expect(emailInp).toHaveStyle(`border-color: ${COLORS.RED}`));
  await waitFor(() => expect(passwordInp).toHaveStyle(`border-color: ${COLORS.RED}`));
});

test('should change border color to red when required validation error', async () => {
  const { getByTestId, getByText } = render(<Register setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const emailInp = getByTestId('email-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Sing up');
  userEvent.type(usernameInp, '');
  userEvent.type(emailInp, '');
  userEvent.type(passwordInp, '');
  userEvent.click(submitBtn);
  await waitFor(() => expect(usernameInp).toHaveStyle(`border-color: ${COLORS.RED}`));
  await waitFor(() => expect(emailInp).toHaveStyle(`border-color: ${COLORS.RED}`));
  await waitFor(() => expect(passwordInp).toHaveStyle(`border-color: ${COLORS.RED}`));
});

test('should has purple border color when no validation errors', async () => {
  const { getByTestId, getByText } = render(<Register setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const emailInp = getByTestId('email-inp');
  const passwordInp = getByTestId('password-inp');
  const repeatedPasswordInp = getByTestId('repeatedPassword-inp');
  const submitBtn = getByText('Sing up');
  userEvent.type(usernameInp, 'qwerty');
  userEvent.type(emailInp, 'qwerqwer@qwer.qwer');
  userEvent.type(passwordInp, 'qwerqwer');
  userEvent.type(repeatedPasswordInp, 'qwerqwer');
  userEvent.click(submitBtn);
  await waitFor(() => expect(usernameInp).toHaveStyle(`border-color: ${COLORS.PURPLE}`));
  await waitFor(() => expect(emailInp).toHaveStyle(`border-color: ${COLORS.PURPLE}`));
  await waitFor(() => expect(passwordInp).toHaveStyle(`border-color: ${COLORS.PURPLE}`));
  await waitFor(() => expect(repeatedPasswordInp).toHaveStyle(`border-color: ${COLORS.PURPLE}`));
});

test('should show successfully registered toast', async () => {
  await mockedAxios.post.mockResolvedValue({ username: 'qwerty' });
  const { getByTestId, getByText, findByText } = render(<Register setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const emailInp = getByTestId('email-inp');
  const passwordInp = getByTestId('password-inp');
  const repeatedPasswordInp = getByTestId('repeatedPassword-inp');
  const submitBtn = getByText('Sing up');
  userEvent.type(usernameInp, 'qwerty');
  userEvent.type(emailInp, 'qwerqwer@qwer.qwer');
  userEvent.type(passwordInp, 'qwerqwer');
  userEvent.type(repeatedPasswordInp, 'qwerqwer');
  await act(async () => {
    userEvent.click(submitBtn);
  });
  await expect(findByText(TOAST_MESSAGES.CREATEAD_ACCOUNT)).toBeTruthy();
});

test('should show global error toast', async () => {
  await mockedAxios.post.mockRejectedValue('rejected');
  const { getByTestId, getByText, findByText } = render(<Register setView={setViewMock} />);
  const usernameInp = getByTestId('username-inp');
  const emailInp = getByTestId('email-inp');
  const passwordInp = getByTestId('password-inp');
  const repeatedPasswordInp = getByTestId('repeatedPassword-inp');
  const submitBtn = getByText('Sing up');
  userEvent.type(usernameInp, 'qwerty');
  userEvent.type(emailInp, 'qwerqwer@qwer.qwer');
  userEvent.type(passwordInp, 'qwerqwer');
  userEvent.type(repeatedPasswordInp, 'qwerqwer');
  userEvent.click(submitBtn);
  await expect(findByText(TOAST_MESSAGES.GLOBAL_ERROR)).toBeTruthy();
});
