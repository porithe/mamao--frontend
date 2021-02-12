import React from 'react';
import { act, render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import App from './App';
import { AuthContext, AuthProvider } from './context/authContext';
import { AuthStatuses } from './constants/authContextTypes';
import { fakeToken } from './__tests__/auth.test';
import { TOAST_MESSAGES } from './constants/toastify';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

test('should render correct text in header link', () => {
  const { getByText } = render(
    <AuthContext.Provider value={{ state: { status: AuthStatuses.SUCCESS } }}>
      <App />
    </AuthContext.Provider>,
  );
  expect(getByText('Mamao')).toBeTruthy();
});

test('should render Unauthenticated app when AuthStatus === UNAUTHORIZED', () => {
  const { getByText } = render(
    <AuthContext.Provider value={{ state: { status: AuthStatuses.UNAUTHORIZED } }}>
      <App />
    </AuthContext.Provider>,
  );
  expect(getByText('Join mamao today!')).toBeTruthy();
});

test('should render Authenticated app when AuthStatus === SUCCESS', () => {
  const { getByText } = render(
    <AuthContext.Provider value={{ state: { status: AuthStatuses.SUCCESS } }}>
      <App />
    </AuthContext.Provider>,
  );
  expect(getByText('logged in')).toBeTruthy();
});

test('should render Authenticated app when token is valid in storage', async () => {
  jest
    .spyOn(global.Date, 'now')
    .mockImplementationOnce(() => new Date('2021-02-14T11:01:58.135Z').valueOf());
  jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => fakeToken);
  const { getByText } = render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  );
  await waitFor(() => expect(getByText('logged in')).toBeTruthy());
});

test('should not authenticate user when return 404', async () => {
  mockedAxios.post.mockRejectedValueOnce({ response: { status: 404 } });
  const { getByTestId, getByText } = render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  );
  userEvent.click(getByText('Log in'));
  const usernameInp = getByTestId('username-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Log in');
  userEvent.type(usernameInp, 'qwertyu');
  userEvent.type(passwordInp, 'qwerqwer');
  await act(async () => {
    userEvent.click(submitBtn);
  });
  await waitFor(() => expect(getByText(TOAST_MESSAGES.USER_NOT_FOUND)).toBeTruthy());
});

test('should not authenticate user when return 401', async () => {
  mockedAxios.post.mockRejectedValueOnce({ response: { status: 401 } });
  const { getByTestId, getByText } = render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  );
  userEvent.click(getByText('Log in'));
  const usernameInp = getByTestId('username-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Log in');
  userEvent.type(usernameInp, 'qwertyu');
  userEvent.type(passwordInp, 'qwerqwer');
  await act(async () => {
    userEvent.click(submitBtn);
  });
  await waitFor(() => expect(getByText(TOAST_MESSAGES.UNAUTHORIZED)).toBeTruthy());
});

test('should not authenticate user when return 500', async () => {
  mockedAxios.post.mockRejectedValueOnce({ response: { status: 500 } });
  const { getByTestId, getByText } = render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  );
  userEvent.click(getByText('Log in'));
  const usernameInp = getByTestId('username-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Log in');
  userEvent.type(usernameInp, 'qwertyu');
  userEvent.type(passwordInp, 'qwerqwer');
  await act(async () => {
    userEvent.click(submitBtn);
  });
  await waitFor(() => expect(getByText(TOAST_MESSAGES.GLOBAL_ERROR)).toBeTruthy());
});

test('should authenticate user', async () => {
  mockedAxios.post.mockResolvedValueOnce({ status: 200, data: { accessToken: fakeToken } });
  const { getByTestId, getByText } = render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  );
  userEvent.click(getByText('Log in'));
  const usernameInp = getByTestId('username-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Log in');
  userEvent.type(usernameInp, 'qwertyu');
  userEvent.type(passwordInp, 'qwerqwer');
  await act(async () => {
    userEvent.click(submitBtn);
  });
  await waitFor(() => expect(getByText('Logout')).toBeInTheDocument());
});

test('should logout user', async () => {
  mockedAxios.post.mockResolvedValueOnce({ status: 200, data: { accessToken: fakeToken } });
  const { getByTestId, getByText } = render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  );
  userEvent.click(getByText('Log in'));
  const usernameInp = getByTestId('username-inp');
  const passwordInp = getByTestId('password-inp');
  const submitBtn = getByText('Log in');
  userEvent.type(usernameInp, 'qwertyu');
  userEvent.type(passwordInp, 'qwerqwer');
  await act(async () => {
    userEvent.click(submitBtn);
  });
  await waitFor(() => expect(getByText('Logout')).toBeInTheDocument());
  await act(async () => {
    userEvent.click(getByText('Logout'));
  });
  await waitFor(() => expect(getByText('Join mamao today!')).toBeTruthy());
});
