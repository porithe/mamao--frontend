import React from 'react';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useAuthView from '../utils/useAuthView';

const MockAuthView = () => {
  const { renderAuthView, currentView } = useAuthView();
  return renderAuthView(currentView);
};

test('should render main view', () => {
  const { getByText } = render(<MockAuthView />);
  const singUpAuthViewBtn = getByText('Sing up');
  const logInAuthViewBtn = getByText('Log in');
  expect(singUpAuthViewBtn).toBeTruthy();
  expect(logInAuthViewBtn).toBeTruthy();
});

test('should render register view', async () => {
  const { getByText, getByTestId } = render(<MockAuthView />);
  const singUpAuthViewBtn = getByText('Sing up');
  await act(async () => {
    userEvent.click(singUpAuthViewBtn);
  });
  expect(getByTestId('username-inp')).toBeTruthy();
  expect(getByTestId('email-inp')).toBeTruthy();
  expect(getByTestId('password-inp')).toBeTruthy();
  expect(getByTestId('repeatedPassword-inp')).toBeTruthy();
});

test('should render login view', async () => {
  const { getByText, getByTestId } = render(<MockAuthView />);
  const logInAuthViewBtn = getByText('Log in');
  await act(async () => {
    userEvent.click(logInAuthViewBtn);
  });
  expect(getByTestId('username-inp')).toBeTruthy();
  expect(getByTestId('password-inp')).toBeTruthy();
});

test('should render register view and change view to login', async () => {
  const { getByText, getByTestId } = render(<MockAuthView />);
  await act(async () => {
    userEvent.click(getByText('Sing up'));
  });
  expect(getByTestId('username-inp')).toBeTruthy();
  expect(getByTestId('email-inp')).toBeTruthy();
  expect(getByTestId('password-inp')).toBeTruthy();
  expect(getByTestId('repeatedPassword-inp')).toBeTruthy();
  await act(async () => {
    userEvent.click(getByText('Log in'));
  });
  expect(getByText("Don't have an account?")).toBeTruthy();
});

test('should render login view and change view to register', async () => {
  const { getByText, getByTestId } = render(<MockAuthView />);
  await act(async () => {
    userEvent.click(getByText('Log in'));
  });
  expect(getByTestId('username-inp')).toBeTruthy();
  expect(getByTestId('password-inp')).toBeTruthy();
  await act(async () => {
    userEvent.click(getByText('Sing up'));
  });
  expect(getByText('Already have an account?')).toBeTruthy();
});
